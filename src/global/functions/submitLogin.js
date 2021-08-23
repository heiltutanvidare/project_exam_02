import { API_BASE_URL } from "../constants/api";

async function submitLogin(username, password) {
	const data = JSON.stringify({
		identifier: username,
		password: password,
	});

	console.log("Data:", data);

	const options = {
		method: "POST",
		body: data,
	};

	try {
		const response = await fetch(`${API_BASE_URL}/auth/local`, options);
		const json = await response.json();
		console.log(json);
		if (json.error) {
			return { success: false, json: json };
		}
		if (json.user) {
			return { success: true, json: json };
		}
	} catch (error) {
		console.error(error);
		return { success: false, error: error };
	}
}

export default submitLogin;
