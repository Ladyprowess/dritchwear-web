import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Supabase environment variables are missing. Some features may not work properly.');
}

export const supabase = createClient(
  supabaseUrl || 'https://qtuzimwhozhutegksqzj.supabase.co',
  supabaseAnonKey || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InF0dXppbXdob3podXRlZ2tzcXpqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA5Njg5MjEsImV4cCI6MjA2NjU0NDkyMX0.JsVqKI3NO9s3dAu6B1RV4_oKE5q7pRhAlRLMBG1EhGg'
);