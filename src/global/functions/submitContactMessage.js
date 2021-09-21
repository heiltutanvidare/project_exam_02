import { API_BASE_URL } from "../constants/api";

async function submitContactMessage(data) {
	const formData = new FormData();
	const newMessage = {
		name: data.name,
		email: data.email,
		telephone: data.phone | "",
		subject: data.subject,
		message: data.message,
	};

	formData.append("data", JSON.stringify(newMessage));

	const options = {
		method: "POST",
		body: formData,
	};

	try {
		const response = await fetch(`${API_BASE_URL}/messages`, options);
		const json = await response.json();
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

export default submitContactMessage;
