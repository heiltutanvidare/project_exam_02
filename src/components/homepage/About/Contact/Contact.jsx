import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
	MIN_NAME_LENGTH,
	MIN_MESSAGE_LENGTH,
	MIN_SUBJECT_LENGTH,
} from "../../../../global/constants/formValidation";
import Button from "../../../ui/Button/Button";
import Heading from "../../../ui/Heading/Heading";
import Message from "../../../ui/Message/Message";
import submitContactMessage from "../../../../global/functions/submitContactMessage";
import { StyledContact } from "./contact.styles";

// Yup schema
const schema = yup.object().shape({
	name: yup
		.string()
		.required("Please enter your name")
		.min(
			MIN_NAME_LENGTH,
			`Please enter at least ${MIN_NAME_LENGTH} characters`
		),
	email: yup
		.string()
		.required("Please enter your email address")
		.email("Please enter a valid email address"),
	phone: yup.string().optional(),
	subject: yup
		.string()
		.required("Please enter a subject")
		.min(
			MIN_SUBJECT_LENGTH,
			`Please enter at least ${MIN_SUBJECT_LENGTH} characters`
		),
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
	const [loading, setLoading] = useState(false);
	const [submittingFailed, setSubmittedFailed] = useState(false);

	// Set upe useForm to use the yup shcema
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	// Function that will run when form is submitted
	async function onSubmit(data) {
		setLoading(true);
		const contact = await submitContactMessage(data);
		if (contact.success) {
			setSubmittedFailed(false);
			setLoading(false);
			setSubmitted(true);
			reset();
		} else {
			setLoading(false);
			setSubmitted(false);
			setSubmittedFailed(true);
		}
	}

	// Log any form validation errors

	if (Object.entries(errors).length !== 0) {
		console.log("Errors:", errors);
	}

	return (
		<StyledContact>
			<Heading
				align="center"
				content="Send us a message"
				pretitle="Lets chat"
			/>
			<form onSubmit={handleSubmit(onSubmit)} id="scrollToContactUs">
				<div className="form__field">
					<label htmlFor="name">Name</label>
					<input
						type="text"
						placeholder="Enter your name"
						id="name"
						errors={errors}
						{...register("name")}
						className={errors.name ? "hasError" : ""}
					/>
					{errors.name && (
						<p className="form__error">{errors.name.message}</p>
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
						type="tel"
						placeholder="Enter your phone number"
						id="phone"
						{...register("phone")}
					/>
				</div>

				<div className="form__field">
					<label htmlFor="subject">Subject</label>
					<input
						type="text"
						placeholder="Enter a subject"
						id="subject"
						{...register("subject")}
						className={errors.subject ? "hasError" : ""}
					/>
					{errors.subject && (
						<p className="form__error">{errors.subject.message}</p>
					)}
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

			{loading && (
				<Message
					loader
					variant="waiting"
					heading="Sending"
					message="Please wait while the message is being sent"
				/>
			)}
			{submittingFailed && (
				<div className="message-container">
					<Message
						heading="Could not send the message"
						message="Something went wrong when sending our message. We are investigating what might have happened."
						variant="danger"
					/>
				</div>
			)}

			{submitted && (
				<Message
					variant="success"
					heading="Message was sendt"
					message="Thank you for your message. We will get back to you shortly."
				/>
			)}
		</StyledContact>
	);
}
