import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	MIN_FIRST_NAME_LENGTH,
	MIN_LAST_NAME_LENGTH,
	MIN_MESSAGE_LENGTH,
} from "../../../../global/constants/formValidation";
import Button from "../../../ui/Button/Button";
import Heading from "../../../ui/Heading/Heading";
import { StyledContact } from "./contact.styles";
import Message from "../../../ui/Message/Message";

// Yup schema
const schema = yup.object().shape({
	firstName: yup
		.string()
		.required("Please enter your first name")
		.min(
			MIN_FIRST_NAME_LENGTH,
			`Please enter at least ${MIN_FIRST_NAME_LENGTH} characters`
		),
	lastName: yup
		.string()
		.required("Please enter your last name")
		.min(
			MIN_LAST_NAME_LENGTH,
			`Please enter at least ${MIN_LAST_NAME_LENGTH} characters`
		),
	email: yup
		.string()
		.required("Please enter your email address")
		.email("Please enter a valid email address"),
	phone: yup.number(),
	message: yup
		.string()
		.required("Please enter you message")
		.min(
			MIN_MESSAGE_LENGTH,
			`Please enter at least ${MIN_MESSAGE_LENGTH} characters`
		),
});

export default function Contact() {
	// Initiate state for the form submission
	const [submitted, setSubmitted] = useState(false);

	// Set upe useForm to use the yup shcema
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	// Function that will run when form is submitted
	function onSubmit(data) {
		console.log(data);
		setSubmitted(true);
		reset();
	}

	// Log any form validation errors
	console.log("Errors:", errors);

	return (
		<StyledContact>
			<Heading
				align="center"
				content="Send us a message"
				pretitle="Lets chat"
			/>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__field">
					<label htmlFor="firstName">First name</label>
					<input
						type="text"
						placeholder="Enter your first name"
						id="firstName"
						errors={errors}
						{...register("firstName")}
						className={errors.firstName ? "hasError" : ""}
					/>
					{errors.firstName && (
						<p className="form__error">
							{errors.firstName.message}
						</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="lastName">Last name</label>
					<input
						type="text"
						placeholder="Enter your last name"
						id="lastName"
						{...register("lastName")}
						className={errors.lastName ? "hasError" : ""}
					/>
					{errors.lastName && (
						<p className="form__error">{errors.lastName.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="email">Email address</label>
					<input
						type="text"
						placeholder="Enter your email address"
						id="email"
						{...register("email")}
						className={errors.email ? "hasError" : ""}
					/>
					{errors.email && (
						<p className="form__error">{errors.email.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="phone">Phone number</label>
					<input
						type="text"
						placeholder="Enter your phone number"
						id="phone"
						{...register("phone")}
					/>
				</div>

				<div className="form__field">
					<label htmlFor="message">Message</label>
					<textarea
						rows="4"
						placeholder="Enter your message"
						id="message"
						{...register("message")}
						className={errors.message ? "hasError" : ""}
					/>
					{errors.message && (
						<p className="form__error">{errors.message.message}</p>
					)}
				</div>

				<Button variant="outlined" fullwidth>
					Send it
				</Button>
			</form>
			{/* Render a success message if form is submitted */}
			{!submitted && (
				<Message
					heading="Message was sendt"
					message="Thank you for your message. We will get back to you shortly."
				/>
			)}
		</StyledContact>
	);
}
