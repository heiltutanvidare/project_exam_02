import { API_BASE_URL } from "../constants/api";

async function submitUpdate(updateData, token, id) {
	const data = JSON.stringify(updateData);
	console.log(data);

	const options = {
		method: "PUT",
		body: data,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(
			`${API_BASE_URL}/establishments/${id}`,
			options
		);
		const json = await response.json();
		console.log(json);
		if (json.error) {
			return { success: false, json: json };
		}
		if (json.updated_at) {
			return { success: true, json: json };
		}
	} catch (error) {
		console.error(error);
		return { success: false, error: error };
	}
}

export default submitUpdate;
