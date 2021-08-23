import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button/Button";
import Message from "../../ui/Message/Message";
import submitLogin from "../../../global/functions/submitLogin";
import { StyledLoginForm } from "./loginForm.styles";

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm() {
	const [loggedIn, setLoggedIn] = useState(false);
	const [logInFailed, setLogInFailed] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	async function onSubmit(data) {
		console.log(data);
		const login = await submitLogin(data.username, data.password);
		console.log(login);
		if (login.success) {
			setLogInFailed(false);
			setLoggedIn(true);
		}
		if (login.json.error) {
			setLoggedIn(false);
			setLogInFailed(true);
		}
		reset();
	}

	// Log any form validation errors
	if (Object.entries(errors).length !== 0) {
		console.log("Errors:", errors);
	}

	return (
		<StyledLoginForm>
			{logInFailed && (
				<div className="message-container">
					<Message
						heading="Wrong username or password"
						message="Please ensure you have entered your correct credentials"
						variant="danger"
					/>
				</div>
			)}
			{loggedIn && (
				<div className="message-container">
					<Message
						heading="Successfully logged in 🥳"
						message="Redirection you to the admin page now…"
						variant="success"
					/>
				</div>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__field">
					<label htmlFor="username">Username (required)</label>
					<input
						type="text"
						placeholder="Enter your username"
						id="username"
						errors={errors}
						{...register("username")}
						className={
							errors.username || logInFailed ? "hasError" : ""
						}
					/>
					{errors.username && (
						<p className="form__error">{errors.username.message}</p>
					)}
				</div>

				<div className="form__field">
					<label htmlFor="username">Password (required)</label>
					<input
						type="password"
						placeholder="Enter your password"
						id="password"
						errors={errors}
						{...register("password")}
						className={
							errors.password || logInFailed ? "hasError" : ""
						}
					/>
					{errors.password && (
						<p className="form__error">{errors.password.message}</p>
					)}
				</div>

				<div className="button-group">
					<Button variant="filled" color="dark" fullwidth={false}>
						Log in
					</Button>
					<p className="form__forgot-password">Forgot password</p>
				</div>
			</form>
		</StyledLoginForm>
	);
}
