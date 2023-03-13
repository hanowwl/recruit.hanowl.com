import React, { useContext, useEffect, useLayoutEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { AuthError, Session } from '@supabase/supabase-js';
import { Users } from '@/graphql/generated/types';
import { useGetUserProfileQuery, useInsertUserMutation } from '@/graphql/generated/hooks';
import { supabase } from '@/supabase';
import { useToast } from '@/hooks';

export type UserProfile = Omit<Users, 'nodeId' | 'resumeCollection'>;

export interface UserSignUpValues {
  email: string;
  password: string;
  name: string;
  phone: string;
  studentDepart: string;
  studentClass: number;
  studentGrade: number;
  studentNumber: number;
}

export interface UserSignInValues {
  email: string;
  password: string;
}

export interface UserSignOptions {
  redirectUri?: string;
}

export interface AuthProviderProps {
  children: React.ReactNode;
}

export interface AuthProviderContext {
  signIn: (values: UserSignInValues, options?: UserSignOptions) => Promise<void>;
  signUp: (values: UserSignUpValues, options?: UserSignOptions) => Promise<void>;
  signOut: () => Promise<void>;

  session: Session | null;
  profile: UserProfile | null;
}

export const AuthContext = React.createContext<AuthProviderContext | null>(null);

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [init, setInit] = useState<boolean>(false);
  const [session, setSession] = useState<Session | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const { refetch } = useGetUserProfileQuery({
    skip: true,
    onCompleted: ({ usersCollection }) => {
      const newProfile = usersCollection?.edges[0].node;
      setInit(true);

      if (newProfile) {
        setProfile(newProfile);
        toast.success({ template: `${newProfile.name}님, 한울에 오신 걸 환영해요 !` });
      }
    },
    onError: (error) => {
      setInit(true);
      toast.error({ template: error.message });
    },
  });
  const [insertUser] = useInsertUserMutation();

  useLayoutEffect(() => {
    const initialize = async () => {
      const { data } = await supabase.auth.getSession();
      if (data) setSession(data.session);
    };

    initialize();

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => setSession(session));

    return () => {
      subscription.unsubscribe();
    };
  }, []);

  useLayoutEffect(() => {
    if (!session) return setInit(true);
    refetch({ filter: { id: { eq: session.user.id } } });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [session]);

  const getSafeOptions = (_options?: UserSignOptions) => {
    const defaultOptions: UserSignOptions = {
      redirectUri: '/',
    };

    return Object.assign(defaultOptions, _options) as Required<UserSignOptions>;
  };

  const context: AuthProviderContext = {
    signUp: async ({ email, password, ...values }, _options) => {
      try {
        const options = getSafeOptions(_options);
        const { data } = await supabase.auth.signUp({ email, password });
        if (!data.user) return toast.error({ template: '이미 가입한 계정이 있어요 😕' });

        await insertUser({ variables: { id: data.user.id, ...values } });
        navigate(options.redirectUri);
        return toast.success({ template: '가입 성공! 뭔가 더 가까워진 느낌? 😎' });
      } catch (error) {
        toast.error({ template: '회원가입에 문제가 생겼어요! 잠시 뒤, 다시 시도해주세요 😢' });
      }
    },
    signIn: async ({ email, password }, _options) => {
      try {
        const options = getSafeOptions(_options);
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;

        navigate(options.redirectUri);
        return toast.success({ template: '로그인 성공! 😎' });
      } catch (error) {
        if (error instanceof AuthError) {
          switch (error.message) {
            case 'Invalid login credentials':
              return toast.error({ template: '이메일 또는 비밀번호가 잘못되었어요' });
            default:
              return toast.error({ template: '로그인에 문제가 생겼어요! 다시 시도해주세요 😢' });
          }
        }

        return toast.error({ template: '로그인에 문제가 생겼어요! 다시 시도해주세요 😢' });
      }
    },
    signOut: async () => {
      setProfile(null);
      setSession(null);
      await supabase.auth.signOut();
    },
    session,
    profile,
  };

  return <AuthContext.Provider value={context}>{init && children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth() must be used within a AuthProvider');

  return context;
};
