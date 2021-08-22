import { API_BASE_URL } from "../constants/api";

async function submitEnquiry(data) {
	const formData = new FormData();
	const newEnquiry = {
		name: data.name,
		email: data.email,
		telephone: data.phone | "",
		number_of_travellers: data.travelers,
		checkin: data.checkin,
		checkout: data.checkout,
		message: data.wantsAndNeeds,
	};

	formData.append("data", JSON.stringify(newEnquiry));

	const options = {
		method: "POST",
		body: formData,
	};

	try {
		const response = await fetch(`${API_BASE_URL}/enquiries`, options);
		const json = await response.json();
		console.log(json);
	} catch (error) {
		console.error(error);
	}
}

export default submitEnquiry;
