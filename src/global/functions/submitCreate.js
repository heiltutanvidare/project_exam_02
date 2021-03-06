import { API_BASE_URL } from "../constants/api";

async function submitCreate(uploadData, token) {
	const formData = new FormData();

	// Handling the main image and appending it to the formData
	const mainImage = uploadData.main_image[0];
	formData.append("files.main_image", mainImage, mainImage.name);

	// Handling the additional images and appending them to the formData
	const images = Array.from(uploadData.images);
	images.forEach((image) =>
		formData.append(`files.images`, image, image.name)
	);

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
