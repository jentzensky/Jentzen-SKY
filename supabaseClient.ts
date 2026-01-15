import { createClient } from '@supabase/supabase-js';

// NOTE: In a real production environment, these should be in a .env file.
// We use a syntactically valid URL as a default to prevent the app from crashing on start.
// The previous placeholder 'YOUR_SUPABASE_URL_HERE' caused an "Invalid URL" error.
const SUPABASE_URL = process.env.SUPABASE_URL || 'https://example.supabase.co';
const SUPABASE_ANON_KEY = process.env.SUPABASE_ANON_KEY || 'placeholder-key';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const TABLE_NAME = 'leads';