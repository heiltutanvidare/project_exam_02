import { useState } from "react";
import { Helmet } from "react-helmet-async";
import monkeyHello from "../../../assets/graphics/monkey-hello.png";
import Container from "../../layout/Container/Container";
import LoginForm from "../../forms/LoginForm/LoginForm";
import { StyledLoginPage } from "./loginPage.styles";

export default function LoginPage() {
	const [emoji, setEmoji] = useState(monkeyHello);

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
								src={emoji}
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
						<LoginForm setEmoji={setEmoji} />
					</div>
				</section>
			</Container>
		</StyledLoginPage>
	);
}
