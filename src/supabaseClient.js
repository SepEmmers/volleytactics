
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://potirivlkrrqocrqkiqm.supabase.co'
const supabaseKey = 'sb_publishable_43ROEjKTO3LKMYk4PWK9Tw_5jJonbLU'

export const supabase = createClient(supabaseUrl, supabaseKey)
