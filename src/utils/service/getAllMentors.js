import supabase from './supabase';

const getAllMentors = async () => {
	try {
		let { data: mentors, error } = await supabase.from('mentors').select('*');

		if (error) {
			throw error;
		}

		return mentors; // Return the mentors data if successful
	} catch (error) {
		console.error('Error fetching mentors:', error.message);
		return null; // Handle errors appropriately
	}
};

export default getAllMentors;
