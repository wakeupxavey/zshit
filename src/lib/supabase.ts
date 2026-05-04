import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vhctrpvhiykgztusqyuc.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZoY3RycHZoaXlrZ3p0dXNxeXVjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc3NTcwNzcsImV4cCI6MjA5MzMzMzA3N30.znfq5CvTHXg4_1pZ_p-4zoyVRIV2J2drbw7Y7A04_ps';

export const supabase = createClient(supabaseUrl, supabaseKey);