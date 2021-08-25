import { API_BASE_URL } from "../constants/api";

async function submitUpdate(updateData, token, id) {
	console.log(updateData);
	const formData = new FormData();

	if (updateData.main_image[0]) {
		const mainImage = updateData.main_image[0];
		formData.append("files.main_image", mainImage, mainImage.name);
	}

	const data = {
		amenities: updateData.amenities,
		bathrooms: updateData.bathrooms,
		bedrooms: updateData.bedrooms,
		km_from_city: updateData.km_from_city,
		description: updateData.description,
		title: updateData.title,
		price: updateData.price,
		type: updateData.type,
	};

	formData.append("data", JSON.stringify(data));

	const options = {
		method: "PUT",
		body: formData,
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
