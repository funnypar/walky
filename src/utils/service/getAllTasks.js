import supabase from './supabase';

const getAllTasks = async () => {
	try {
		let { data: tasks, error } = await supabase.from('tasks').select('*');

		if (error) {
			throw error;
		}

		return tasks; // Return the mentors data if successful
	} catch (error) {
		console.error('Error fetching mentors:', error.message);
		return null; // Handle errors appropriately
	}
};

export default getAllTasks;
