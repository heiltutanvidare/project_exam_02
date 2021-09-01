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
import submitCreate from "../../../global/functions/submitCreate";
import FullPageMessage from "../../ui/Message/FullPageMessage";
import { MAX_FILE_SIZE } from "../../../global/constants/formValidation";
import { StyledLoginForm } from "../LoginForm/loginForm.styles";

const schema = yup.object().shape({
	title: yup.string().required("Please enter a title"),
	type: yup
		.number()
		.required("Please select an accommodation type")
		.typeError("Please select an accommodation type"),
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
	images: yup
		.mixed()
		.test("numberOfFiles", "Please select exactly 4 images", (value) => {
			return value && value.length === 4;
		})
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

export default function AddAccommodationForm() {
	const [loading, setLoading] = useState(false);
	const [created, setCreated] = useState(false);
	const [creatingFailed, setCreatingFailed] = useState(false);
	const [auth] = useContext(AuthContext);
	const { data: types } = useFetch(`${API_BASE_URL}/types`);
	const { data: amenities } = useFetch(`${API_BASE_URL}/amenities`);

	const history = useHistory();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	async function onSubmit(data) {
		const doUpdate = window.confirm(
			"This will create this accommodation. Are you sure you want to to that?"
		);
		if (doUpdate) {
			window.scrollTo(0, 0);
			setLoading(true);
			const create = await submitCreate(data, auth);
			if (create.success) {
				setLoading(false);
				setCreatingFailed(false);
				setCreated(true);
				reset();
				setTimeout(() => {
					history.push("/admin");
				}, 2000);
			}
			if (create.json.error) {
				setLoading(false);
				setCreated(false);
				setCreatingFailed(true);
			}
		}
	}

	// Log any form validation errors
	if (Object.entries(errors).length !== 0) {
		console.log("Errors:", errors);
	}

	return (
		<StyledLoginForm>
			{loading && (
				<FullPageMessage
					loader
					variant="waiting"
					heading="Creating accommodation"
					message="It may take a few seconds to upload the images, but please wait for the process to finish."
				/>
			)}
			{creatingFailed && (
				<div className="message-container">
					<Message
						heading="Could not create accommodation"
						message="Something went wrong when creating the accommodation. We are investigating what might have happened."
						variant="danger"
					/>
				</div>
			)}
			{created && (
				<FullPageMessage
					loader
					variant="success"
					heading="Successfully created 🥳"
					message="Redirection you to the admin page now…"
				/>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				{/* Title */}
				<div className="form__field">
					<label htmlFor="title">Title (required)</label>
					<input
						type="text"
						placeholder="Enter your title"
						id="title"
						{...register("title")}
						className={
							errors.title || creatingFailed ? "hasError" : ""
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
						className={
							errors.type || creatingFailed ? "hasError" : ""
						}
						{...register("type")}
					>
						<option value="">Select an accommodation type</option>
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

				{/* Kilometers */}
				<div className="form__field">
					<label htmlFor="km_from_city">Kilometers (required)</label>
					<input
						type="number"
						placeholder="Kilometers from city centre"
						id="km_from_city"
						{...register("km_from_city")}
						className={
							errors.km_from_city || creatingFailed
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
						{...register("price")}
						className={
							errors.price || creatingFailed ? "hasError" : ""
						}
					/>
					{errors.price && (
						<p className="form__error">{errors.price.message}</p>
					)}
				</div>

				{/* Bedrooms */}
				<div className="form__field">
					<label htmlFor="bedrooms">Bedrooms (required)</label>
					<input
						type="number"
						placeholder="Enter number of bedrooms"
						id="bedrooms"
						{...register("bedrooms")}
						className={
							errors.bedrooms || creatingFailed ? "hasError" : ""
						}
					/>
					{errors.bedrooms && (
						<p className="form__error">{errors.bedrooms.message}</p>
					)}
				</div>

				{/* Bathrooms */}
				<div className="form__field">
					<label htmlFor="bathrooms">Bathrooms (required)</label>
					<input
						type="number"
						placeholder="Enter number of bathrooms"
						id="bathrooms"
						{...register("bathrooms")}
						className={
							errors.bathrooms || creatingFailed ? "hasError" : ""
						}
					/>
					{errors.bathrooms && (
						<p className="form__error">
							{errors.bathrooms.message}
						</p>
					)}
				</div>

				{/* Description */}
				<div className="form__field">
					<label htmlFor="description">Description (required)</label>
					<textarea
						rows="8"
						placeholder="Enter a description"
						id="description"
						{...register("description")}
						className={
							errors.description || creatingFailed
								? "hasError"
								: ""
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
					<label htmlFor="amenities">Amenities (optional)</label>
					<div className="form__checkbox__grid">
						{amenities.map((amenity) => {
							return (
								<div
									className="form__checkbox__field"
									key={amenity.id}
								>
									<input
										type="checkbox"
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

				{/* Main image */}
				<div className="form__field">
					<label htmlFor="main_image">Main image (required)</label>
					<input
						{...register("main_image")}
						className={
							errors.main_image || creatingFailed
								? "hasError"
								: ""
						}
						type="file"
						name="main_image"
						id="main_image"
					/>
					{errors.main_image && (
						<p className="form__error">
							{errors.main_image.message}
						</p>
					)}
				</div>

				{/* Additional images */}
				<div className="form__field">
					<label htmlFor="images">
						Additional images (4 images are required)
					</label>
					<input
						className={
							errors.images || creatingFailed ? "hasError" : ""
						}
						{...register("images")}
						type="file"
						name="images"
						id="images"
						multiple
					/>
					{errors.images && (
						<p className="form__error">{errors.images.message}</p>
					)}
				</div>

				<div className="button-group">
					<Button variant="filled" color="dark" fullwidth={false}>
						Submit new accommodation
					</Button>
				</div>
			</form>
		</StyledLoginForm>
	);
}
