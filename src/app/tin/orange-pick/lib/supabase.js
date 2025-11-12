
import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://hwzejrpflnjanaljwlnt.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh3emVqcnBmbG5qYW5hbGp3bG50Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA4NTgxOTEsImV4cCI6MjA2NjQzNDE5MX0.sImQ5HU0W7sX19AXLKlZVNcG9pmwpwHXwhD85JlQ-Y8';
export const supabase = createClient(supabaseUrl, supabaseKey);