import * as Types from '@/graphql/generated/types';

export interface UserWithResume {
  id: Types.Scalars['UUID'];
  name: Types.Scalars['String'];
  phone: Types.Scalars['String'];
  role: Types.Scalars['String'];
  student_depart: Types.Scalars['String'];
  student_class: Types.Scalars['Int'];
  student_grade: Types.Scalars['Int'];
  student_number: Types.Scalars['Int'];
  created_at?: Types.Scalars['Datetime'];

  resume:
    | {
        id: Types.Scalars['Int'];
        case_id: Types.Scalars['Int'];
        case_name: Types.Scalars['String'];

        fields: {
          question: {
            id: Types.Scalars['Int'];
            value: Types.Scalars['String'];
          };

          answer: {
            id: Types.Scalars['Int'];
            value: Types.Scalars['String'];
          };
        }[];

        created_at?: Types.Scalars['Datetime'];
        updated_at?: Types.Scalars['Datetime'];
        submitted_at?: Types.Scalars['Datetime'];
      }[]
    | null;
}
