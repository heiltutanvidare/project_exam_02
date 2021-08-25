import { API_BASE_URL } from "../constants/api";

async function submitCreate(uploadData, token) {
	console.log(uploadData);
	const mainImage = uploadData.main_image[0];
	const formData = new FormData();
	formData.append("files.main_image", mainImage, mainImage.name);

	const data = {
		amenities: uploadData.amenities,
		bathrooms: uploadData.bathrooms,
		bedrooms: uploadData.bedrooms,
		km_from_city: uploadData.km_from_city,
		description: uploadData.description,
		title: uploadData.title,
		price: uploadData.price,
		type: uploadData.type,
	};

	console.log(JSON.stringify(data));

	formData.append("data", JSON.stringify(data));

	const options = {
		method: "POST",
		body: formData,
		headers: {
			Authorization: `Bearer ${token}`,
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
