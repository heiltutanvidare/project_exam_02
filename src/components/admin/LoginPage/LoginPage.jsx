import React from "react";
import calendar from "../../../assets/photos/calendar.jpg";
import Container from "../../layout/Container/Container";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { StyledLoginPage } from "./loginPage.styles";

export default function LoginPage() {
	return (
		<StyledLoginPage className="login">
			<img className="login__image" src={calendar} alt="A calendar" />
			<Container>
				<h1 className="login__title">Admin dashboard</h1>
				<p className="login__text">
					Log in to add accommodations and manage messages and
					enquiries
				</p>
				<LoginForm />
			</Container>
		</StyledLoginPage>
	);
}
