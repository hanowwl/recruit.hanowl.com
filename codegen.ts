import type { CodegenConfig } from '@graphql-codegen/cli';
import dotenv from 'dotenv';

dotenv.config();

interface ProcessEnv {
  VITE_SUPABASE_URL: string;
  VITE_SUPABASE_ANON_KEY: string;
}

const ENV = process.env as unknown as ProcessEnv;
if (!ENV.VITE_SUPABASE_URL || !ENV.VITE_SUPABASE_ANON_KEY)
  throw new Error('Invalid Supabase URL or Anon Key. Check your env variables');

const config: CodegenConfig = {
  overwrite: true,
  schema: {
    [`${ENV.VITE_SUPABASE_URL}/graphql/v1`]: {
      headers: {
        apiKey: ENV.VITE_SUPABASE_ANON_KEY,
      },
    },
  },
  documents: 'src/**/*.gql',
  generates: {
    'src/graphql/generated/types.ts': {
      plugins: ['typescript'],
    },
    'src/graphql/generated/operations.ts': {
      preset: 'import-types',
      presetConfig: { typesPath: './types' },
      plugins: ['typescript-operations'],
    },
    'src/graphql/generated/hooks.ts': {
      preset: 'import-types',
      presetConfig: {
        typesPath: './operations',
        withMutationFn: true,
      },
      plugins: ['typescript-react-apollo'],
    },
  },
};

export default config;
