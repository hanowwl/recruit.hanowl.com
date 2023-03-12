import { createClient } from '@supabase/supabase-js';

import { ENV } from './constant';
import { Database } from './types/supabase';

if (!ENV.SUPABASE_URL || !ENV.SUPABASE_ANON_KEY)
  throw new Error('Invalid Supbase URL or Anon Key. Check your env variables');

export const supabase = createClient<Database>(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY);
