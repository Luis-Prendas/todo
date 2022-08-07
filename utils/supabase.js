import { createClient } from '@supabase/supabase-js'

const SUPABASE_KEY = process.env.NEXT_PUBLIC_ANON_PUBLIC_KEY
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL

export const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)
