/* eslint-disable no-undef */

import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://iwvrlrgwcmydgpdajmyj.supabase.co';
const supabaseKey =
	'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml3dnJscmd3Y215ZGdwZGFqbXlqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjY5MDMyMzUsImV4cCI6MjA0MjQ3OTIzNX0.HPjkOY5IxULmVMmli5P6jRoOLLwfWHeM8ZWzsMdSpCc';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
