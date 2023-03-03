import { ENV } from './constant';

import { createClient } from '@supabase/supabase-js';

if (!ENV.SUPABASE_URL || !ENV.SUPABASE_ANON_KEY)
  throw new Error('Invalid Supbase URL or Anon Key. Check your env variables');

export const supabase = createClient(ENV.SUPABASE_URL, ENV.SUPABASE_ANON_KEY);
