import { API_BASE_URL } from "../constants/api";

async function submitDelete(id, token) {
	const options = {
		method: "DELETE",
		headers: {
			Authorization: `Bearer ${token}`,
		},
	};

	try {
		const response = await fetch(
			`${API_BASE_URL}/establishments/${id}`,
			options
		);
		const json = await response.json();
		if (json.error) {
			return { success: false, json: json };
		}
		if (json.id) {
			return { success: true, json: json };
		}
	} catch (error) {
		console.error(error);
		return { success: false, error: error };
	}
}

export default submitDelete;
