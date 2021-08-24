import { useState, useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button/Button";
import Message from "../../ui/Message/Message";
import submitCreate from "../../../global/functions/submitCreate";
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

export default function AddAccommodationForm() {
	const [created, setCreated] = useState(false);
	const [creatingFailed, setCreatingFailed] = useState(false);
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
			"This will create this accommodation. Are you sure you want to to that?"
		);
		if (doUpdate) {
			const create = await submitCreate(data, auth);
			if (create.success) {
				setCreatingFailed(false);
				setCreated(true);
				reset();
				setTimeout(() => {
					history.push("/admin");
				}, 1500);
			}
			if (create.json.error) {
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
				<div className="message-container">
					<Message
						heading="Successfully created 🥳"
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
						placeholder="Enter your title"
						id="title"
						errors={errors}
						{...register("title")}
						className={
							errors.title || creatingFailed ? "hasError" : ""
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
						placeholder="Kilometers from city centre"
						id="km_from_city"
						errors={errors}
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

				<div className="form__field">
					<label htmlFor="price">Price in USD (required)</label>
					<input
						type="number"
						placeholder="Enter a price in USD"
						id="price"
						errors={errors}
						{...register("price")}
						className={
							errors.price || creatingFailed ? "hasError" : ""
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
						placeholder="Enter number of bedrooms"
						id="bedrooms"
						errors={errors}
						{...register("bedrooms")}
						className={
							errors.bedrooms || creatingFailed ? "hasError" : ""
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
						placeholder="Enter number of bathrooms"
						id="bathrooms"
						errors={errors}
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

				<div className="form__field">
					<label htmlFor="description">Description (required)</label>
					<textarea
						rows="8"
						placeholder="Enter a description"
						id="description"
						errors={errors}
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

				<div className="button-group">
					<Button variant="filled" color="dark" fullwidth={false}>
						Submit new accommodation
					</Button>
				</div>
			</form>
		</StyledLoginForm>
	);
}
