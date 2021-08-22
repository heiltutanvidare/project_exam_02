import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MIN_NAME_LENGTH } from "../../../global/constants/formValidation";
import Button from "../../ui/Button/Button";
import { StyledEnquiryForm } from "./enquiryForm.styles";
import Message from "../../ui/Message/Message";
import submitEnquiry from "../../../global/functions/submitEnquiry";

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
	travelers: yup
		.number()
		.typeError("Please enter a number")
		.required("Please tell us how many you are"),
	checkin: yup
		.date("Please select a date")
		.typeError("Please select a date")
		.required("Please tell us when you are arriving"),
	checkout: yup
		.date("Please select a date")
		.typeError("Please select a date")
		.required("Please tell us when you are leaving"),
	wantsAndNeeds: yup.string(),
});

export default function EnquiryForm() {
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
		submitEnquiry(data);
		reset();
	}

	// Log any form validation errors
	console.log("Errors:", errors);

	return (
		<StyledEnquiryForm>
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__field">
					<label htmlFor="name">Name (required)</label>
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
					<label htmlFor="email">Email address (required)</label>
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
					<label htmlFor="travelers">
						Number of travelers (required)
					</label>
					<input
						type="number"
						placeholder="Enter number of travelers"
						id="travelers"
						{...register("travelers")}
						className={errors.travelers ? "hasError" : ""}
					/>
					{errors.travelers && (
						<p className="form__error">
							{errors.travelers.message}
						</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="checkin">Check in (required)</label>
					<input
						type="date"
						placeholder="Select a check in date"
						id="checkin"
						{...register("checkin")}
						className={errors.checkin ? "hasError" : ""}
					/>
					{errors.checkin && (
						<p className="form__error">{errors.checkin.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="checkout">Check out (required)</label>
					<input
						type="date"
						placeholder="Select a check out date"
						id="checkout"
						{...register("checkout")}
						className={errors.checkout ? "hasError" : ""}
					/>
					{errors.checkout && (
						<p className="form__error">{errors.checkout.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="wantsAndNeeds">
						Wants, needs and interests
					</label>
					<textarea
						rows="4"
						placeholder="Enter any wants, needs and interests here"
						id="wantsAndNeeds"
						{...register("wantsAndNeeds")}
						className={errors.wantsAndNeeds ? "hasError" : ""}
					/>
					{errors.wantsAndNeeds && (
						<p className="form__error">
							{errors.wantsAndNeeds.message}
						</p>
					)}
				</div>

				<Button variant="outlined" color="light" fullwidth>
					Send it
				</Button>
			</form>
			{/* Render a success message if form is submitted */}
			{submitted && (
				<Message
					variant="success"
					heading="Enquiry was sendt"
					message="Thank you for enquiring about accomodations. We will get back to you shortly."
				/>
			)}
		</StyledEnquiryForm>
	);
}
