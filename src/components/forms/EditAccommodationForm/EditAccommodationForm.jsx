import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button/Button";
import Message from "../../ui/Message/Message";
import submitUpdate from "../../../global/functions/submitUpdate";
import { StyledLoginForm } from "../LoginForm/loginForm.styles";
import AuthContext from "../../../global/contexts/AuthContext";
import { useHistory } from "react-router";

const schema = yup.object().shape({
	title: yup.string().required("Please enter a title"),
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
});

export default function EditAccommodationForm({ accommodation }) {
	const [updated, setUpdated] = useState(false);
	const [updateFailed, setUpdateFailed] = useState(false);
	const [auth] = useContext(AuthContext);

	const history = useHistory();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	async function onSubmit(data) {
		const doUpdate = window.confirm(
			"This will update this accommodation. Are you sure you want to to that?"
		);
		if (doUpdate) {
			const update = await submitUpdate(data, auth, accommodation.id);
			if (update.success) {
				setUpdateFailed(false);
				setUpdated(true);
				reset();
				setTimeout(() => {
					history.push("/admin");
				}, 1500);
			}
			if (update.json.error) {
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
		<StyledLoginForm>
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
				<div className="message-container">
					<Message
						heading="Successfully updated 🥳"
						message="Redirection you to the admin page now…"
						variant="success"
					/>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__field">
					<label htmlFor="title">Title (required)</label>
					<input
						type="text"
						defaultValue={accommodation.title || null}
						placeholder="Enter your title"
						id="title"
						errors={errors}
						{...register("title")}
						className={
							errors.title || updateFailed ? "hasError" : ""
						}
					/>
					{errors.title && (
						<p className="form__error">{errors.title.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="km_from_city">Kilometers (required)</label>
					<input
						type="number"
						defaultValue={accommodation.km_from_city}
						placeholder="Kilometers from city centre"
						id="km_from_city"
						errors={errors}
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

				<div className="form__field">
					<label htmlFor="price">Price in USD (required)</label>
					<input
						type="number"
						defaultValue={accommodation.price}
						placeholder="Enter a price in USD"
						id="price"
						errors={errors}
						{...register("price")}
						className={
							errors.price || updateFailed ? "hasError" : ""
						}
					/>
					{errors.price && (
						<p className="form__error">{errors.price.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="bedrooms">Bedrooms (required)</label>
					<input
						type="number"
						defaultValue={accommodation.bedrooms}
						placeholder="Enter number of bedrooms"
						id="bedrooms"
						errors={errors}
						{...register("bedrooms")}
						className={
							errors.bedrooms || updateFailed ? "hasError" : ""
						}
					/>
					{errors.bedrooms && (
						<p className="form__error">{errors.bedrooms.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="bathrooms">Bathrooms (required)</label>
					<input
						type="number"
						defaultValue={accommodation.bathrooms}
						placeholder="Enter number of bathrooms"
						id="bathrooms"
						errors={errors}
						{...register("bathrooms")}
						className={
							errors.bathrooms || updateFailed ? "hasError" : ""
						}
					/>
					{errors.bathrooms && (
						<p className="form__error">
							{errors.bathrooms.message}
						</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="description">Bathrooms (required)</label>
					<textarea
						rows="8"
						defaultValue={accommodation.description}
						placeholder="Enter a description"
						id="description"
						errors={errors}
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

				<div className="button-group">
					<Button variant="filled" color="dark" fullwidth={false}>
						Submit changes
					</Button>
				</div>
			</form>
		</StyledLoginForm>
	);
}
