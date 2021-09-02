import { useState, useContext } from "react";
import { useHistory } from "react-router";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { API_BASE_URL } from "../../../global/constants/api";
import Button from "../../ui/Button/Button";
import Message from "../../ui/Message/Message";
import useFetch from "../../../hooks/useFetch";
import AuthContext from "../../../global/contexts/AuthContext";
import submitUpdate from "../../../global/functions/submitUpdate";
import FullPageMessage from "../../ui/Message/FullPageMessage";
import { MAX_FILE_SIZE } from "../../../global/constants/formValidation";
import DeleteAccommodation from "../../admin/AdminPage/EditAccommodationPage/DeleteAccommodation";
import { StyledForm } from "../form.styles";

const schema = yup.object().shape({
	title: yup.string().required("Please enter a title"),
	type: yup.string().required("Please select an accommodation type"),
	km_from_city: yup
		.number()
		.required("Please enter how far the place is from the city center")
		.typeError("Please enter a number"),
	price: yup
		.number()
		.required("Please enter a price")
		.typeError("Please enter a number"),
	bedrooms: yup
		.number()
		.required("Please enter how many bedrooms there are")
		.typeError("Please enter a number"),
	bathrooms: yup
		.number()
		.required("Please enter how many bathrooms there are")
		.typeError("Please enter a number"),
	description: yup.string().required("Please enter a description"),
	amenities: yup.array().nullable(),
});

const mainImageSelectSchema = yup.object().shape({
	main_image: yup
		.mixed()
		.test(
			"fileName",
			"Please select a main image for your accommodation",
			(value) => {
				return value[0] && value[0].fileName !== "";
			}
		)
		.test("fileSize", "The selected image file is too large", (value) => {
			return value[0] && value[0].size <= MAX_FILE_SIZE;
		})
		.test("type", "Only image files are supported", (value) => {
			return value[0] && value[0].type.includes("image");
		}),
});

const imagesSelectSchema = yup.object().shape({
	images: yup
		.mixed()
		.test("fileSize", "The images are too large", (value) => {
			let arr = Array.from(value);
			let approvedImages = [];
			arr.forEach((item) => {
				item.size <= MAX_FILE_SIZE && approvedImages.push(item);
			});
			return value && approvedImages.length === 4;
		})
		.test("type", "Only image files are supported", (value) => {
			let arr = Array.from(value);
			let approvedImages = [];
			arr.forEach((item) => {
				item.type.includes("image") && approvedImages.push(item);
			});
			return value && approvedImages.length === 4;
		}),
});

export default function EditAccommodationForm({ accommodation }) {
	const [loading, setLoading] = useState(false);
	const [updated, setUpdated] = useState(false);
	const [updateFailed, setUpdateFailed] = useState(false);
	const [auth] = useContext(AuthContext);
	const { data: types } = useFetch(`${API_BASE_URL}/types`);
	const { data: amenities } = useFetch(`${API_BASE_URL}/amenities`);
	const history = useHistory();

	function checkIfAmenityExists(id) {
		return accommodation.amenities.find((amenity) => amenity.id === id);
	}

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	const {
		register: regMainImage,
		formState: { errors: errorsMainImage },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(mainImageSelectSchema),
	});

	const {
		register: regImages,
		formState: { errors: errorsImages },
	} = useForm({
		mode: "onChange",
		resolver: yupResolver(imagesSelectSchema),
	});

	async function onSubmit(data) {
		const doUpdate = window.confirm(
			"This will update this accommodation. Are you sure you want to to that?"
		);
		if (doUpdate) {
			window.scrollTo(0, 0);
			setLoading(true);
			const update = await submitUpdate(data, auth, accommodation.id);
			if (update.success) {
				setLoading(false);
				setUpdateFailed(false);
				setUpdated(true);
				reset();
				setTimeout(() => {
					history.push("/admin");
				}, 2000);
			}
			if (update.json.error) {
				setLoading(false);
				setUpdated(false);
				setUpdateFailed(true);
			}
		}
	}

	// Log any form validation errors
	if (Object.entries(errors).length !== 0) {
		console.log("Errors:", errors);
	}

	return (
		<StyledForm>
			{loading && (
				<FullPageMessage
					loader
					variant="waiting"
					heading="Updating the accommodation"
					message="Please wait for the process to finish"
				/>
			)}
			{updateFailed && (
				<div className="message-container">
					<Message
						heading="Could not update accommodation"
						message="Something went wrong when updating the accommodation. We are investigating what might have happened."
						variant="danger"
					/>
				</div>
			)}
			{updated && (
				<FullPageMessage
					loader
					variant="success"
					heading="Successfully updated 🥳"
					message="Redirection you to the admin page now…"
				/>
			)}

			{/* The form */}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Title */}
				<div className="form__field">
					<label htmlFor="title">Title (required)</label>
					<input
						type="text"
						defaultValue={accommodation.title}
						placeholder="Enter your title"
						id="title"
						{...register("title")}
						className={
							errors.title || updateFailed ? "hasError" : ""
						}
					/>
					{errors.title && (
						<p className="form__error">{errors.title.message}</p>
					)}
				</div>

				{/* Type */}
				<div className="form__field">
					<label htmlFor="type">Accommodation type (required)</label>
					<select
						name="type"
						id="type"
						defaultValue=""
						className={
							errors.type || updateFailed ? "hasError" : ""
						}
						{...register("type")}
					>
						<option value="" disabled>
							Select an accommodation type
						</option>
						{types.map((type) => {
							return (
								<option key={type.id} value={type.id}>
									{type.accommodation_type}
								</option>
							);
						})}
					</select>
					{errors.type && (
						<p className="form__error">{errors.type.message}</p>
					)}
				</div>

				<div className="form__grid">
					{/* Kilometeres */}
					<div className="form__field">
						<label htmlFor="km_from_city">
							Kilometers (required)
						</label>
						<input
							type="number"
							placeholder="Kilometers from city centre"
							defaultValue={accommodation.km_from_city}
							id="km_from_city"
							{...register("km_from_city")}
							className={
								errors.km_from_city || updateFailed
									? "hasError"
									: ""
							}
						/>
						{errors.km_from_city && (
							<p className="form__error">
								{errors.km_from_city.message}
							</p>
						)}
					</div>
					{/* Price */}
					<div className="form__field">
						<label htmlFor="price">Price in USD (required)</label>
						<input
							type="number"
							placeholder="Enter a price in USD"
							id="price"
							defaultValue={accommodation.price}
							{...register("price")}
							className={
								errors.price || updateFailed ? "hasError" : ""
							}
						/>
						{errors.price && (
							<p className="form__error">
								{errors.price.message}
							</p>
						)}
					</div>
					{/* Bedrooms */}
					<div className="form__field">
						<label htmlFor="bedrooms">Bedrooms (required)</label>
						<input
							type="number"
							placeholder="Enter number of bedrooms"
							id="bedrooms"
							defaultValue={accommodation.bedrooms}
							{...register("bedrooms")}
							className={
								errors.bedrooms || updateFailed
									? "hasError"
									: ""
							}
						/>
						{errors.bedrooms && (
							<p className="form__error">
								{errors.bedrooms.message}
							</p>
						)}
					</div>
					{/* Bathrooms */}
					<div className="form__field">
						<label htmlFor="bathrooms">Bathrooms (required)</label>
						<input
							type="number"
							placeholder="Enter number of bathrooms"
							id="bathrooms"
							defaultValue={accommodation.bathrooms}
							{...register("bathrooms")}
							className={
								errors.bathrooms || updateFailed
									? "hasError"
									: ""
							}
						/>
						{errors.bathrooms && (
							<p className="form__error">
								{errors.bathrooms.message}
							</p>
						)}
					</div>
				</div>

				{/* Description */}
				<div className="form__field">
					<label htmlFor="description">Description (required)</label>
					<textarea
						rows="8"
						placeholder="Enter a description"
						id="description"
						defaultValue={accommodation.description}
						{...register("description")}
						className={
							errors.description || updateFailed ? "hasError" : ""
						}
					/>
					{errors.description && (
						<p className="form__error">
							{errors.description.message}
						</p>
					)}
				</div>

				{/* Amenities */}
				<div className="form__field">
					<label htmlFor="amenities">Amenities</label>
					<div className="form__checkbox__grid">
						{amenities.map((amenity) => {
							return (
								<div
									className="form__checkbox__field"
									key={amenity.id}
								>
									<input
										type="checkbox"
										defaultChecked={checkIfAmenityExists(
											amenity.id
										)}
										name={amenity.amenity}
										id={amenity.amenity}
										value={amenity.id}
										{...register("amenities")}
									/>
									<label htmlFor={amenity.amenity}>
										{amenity.amenity}
									</label>
								</div>
							);
						})}
					</div>
					{errors.amenities && (
						<p className="form__error">
							{errors.amenities.message}
						</p>
					)}
				</div>

				<div className="form__grid">
					{/* Main image */}
					<div className="form__field">
						<label htmlFor="main_image">Main image</label>
						<input
							className={
								errorsMainImage.main_image || updateFailed
									? "hasError"
									: ""
							}
							type="file"
							name="main_image"
							id="main_image"
							{...regMainImage("main_image")}
							{...register("main_image")}
						/>
						{errorsMainImage.main_image && (
							<p className="form__error">
								{errorsMainImage.main_image.message}
							</p>
						)}
					</div>
					{/* Additional images */}
					<div className="form__field">
						<label htmlFor="images">Additional images</label>
						<input
							className={
								errorsImages.images || updateFailed
									? "hasError"
									: ""
							}
							{...regImages("images")}
							{...register("images")}
							type="file"
							name="images"
							id="images"
							multiple
						/>
						{errorsImages.images && (
							<p className="form__error">
								{errorsImages.images.message}
							</p>
						)}
					</div>
				</div>

				<div className="button-group">
					<Button variant="filled" color="dark" fullwidth={false}>
						Update accommodation
					</Button>
					<DeleteAccommodation id={accommodation.id} />
				</div>
			</form>
		</StyledForm>
	);
}
