import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../ui/Button/Button";
import Message from "../../ui/Message/Message";
import FullPageMessage from "../../ui/Message/FullPageMessage";
import submitLogin from "../../../global/functions/submitLogin";
import AuthContext from "../../../global/contexts/AuthContext";
import loginManPassword from "../../../assets/graphics/loginMan-password.png";
import loginManError from "../../../assets/graphics/loginMan-error.png";
import loginManHello from "../../../assets/graphics/loginMan-hello.png";
import { StyledForm } from "../form.styles";

const schema = yup.object().shape({
	username: yup.string().required("Please enter your username"),
	password: yup.string().required("Please enter your password"),
});

export default function LoginForm({ setAvatar }) {
	const [loading, setLoading] = useState(false);
	const [loggedIn, setLoggedIn] = useState(false);
	const [logInFailed, setLogInFailed] = useState(false);
	const [, setAuth] = useContext(AuthContext);

	const history = useHistory();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm({ resolver: yupResolver(schema) });

	async function onSubmit(data) {
		window.scrollTo(0, 0);
		setLoading(true);
		setAvatar(loginManHello);
		const login = await submitLogin(data.username, data.password);
		if (login.success) {
			setLoading(false);

			setLogInFailed(false);
			setLoggedIn(true);
			setAuth(login.json.jwt);
			setTimeout(() => {
				history.push("/admin");
			}, 2000);
		}
		if (login.json.error) {
			setAvatar(loginManError);
			setLoading(false);
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
		<StyledForm>
			{loading && (
				<FullPageMessage
					loader
					variant="waiting"
					heading="Loging in"
					message="Please wait while we log you in"
				/>
			)}
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
				<FullPageMessage
					loader
					variant="success"
					heading="Successfully logged in ????"
					message="Redirection you to the admin page now???"
				/>
			)}
			<form onSubmit={handleSubmit(onSubmit)}>
				<div className="form__field">
					<label htmlFor="username">Username (required)</label>
					<input
						onFocus={() => setAvatar(loginManHello)}
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
						onFocus={() => setAvatar(loginManPassword)}
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
		</StyledForm>
	);
}

LoginForm.propTypes = {
	setAvatar: PropTypes.func,
};
