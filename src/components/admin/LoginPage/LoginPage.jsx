import { useState } from "react";
import { Helmet } from "react-helmet-async";
import loginManHello from "../../../assets/graphics/loginMan-hello.png";
import Container from "../../layout/Container/Container";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { StyledLoginPage } from "./loginPage.styles";

export default function LoginPage() {
	// State variable to handle the version of avatar that is showing
	const [avatar, setAvatar] = useState(loginManHello);

	return (
		<StyledLoginPage className="login">
			<Helmet>
				<title>Holidaze | Log in</title>
				<meta
					name="description"
					content="If you are Holidaze partner, this is where you log in to the Holidaze admin panel"
				/>
			</Helmet>
			<Container>
				<section className="login__grid">
					<div className="login__grid--left">
						<div className="login__image-container">
							<img
								className="login__image"
								src={avatar}
								alt="A monkey welcomming you"
							/>
						</div>
					</div>
					<div className="login__grid--right">
						<h1 className="login__title">Admin dashboard</h1>
						<p className="login__text">
							Log in to add accommodations and manage messages and
							enquiries
						</p>
						<LoginForm setAvatar={setAvatar} />
					</div>
				</section>
			</Container>
		</StyledLoginPage>
	);
}
