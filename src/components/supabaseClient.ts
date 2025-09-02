import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://hgtawxicxgyegacmhcrv.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhndGF3eGljeGd5ZWdhY21oY3J2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQyMjUzNzMsImV4cCI6MjA2OTgwMTM3M30.xdOiM7qFXDd_AZcQ2VCoFIA6vpiS8q_R4krZQbS7wOs';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
