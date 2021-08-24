import { API_BASE_URL } from "../constants/api";

async function submitCreate(updateData, token) {
	const data = JSON.stringify(updateData);

	const options = {
		method: "POST",
		body: data,
		headers: {
			Authorization: `Bearer ${token}`,
			"Content-Type": "application/json",
		},
	};

	try {
		const response = await fetch(
			`${API_BASE_URL}/establishments/`,
			options
		);
		const json = await response.json();
		console.log(json);
		if (json.error) {
			return { success: false, json: json };
		}
		if (json.created_at) {
			return { success: true, json: json };
		}
	} catch (error) {
		console.error(error);
		return { success: false, error: error };
	}
}

export default submitCreate;
