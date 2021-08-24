import React from "react";
import Container from "../../../layout/Container/Container";
import { StyledAdminHero } from "./adminHero.styles";

export default function AdminHero() {
	return (
		<StyledAdminHero>
			<Container>
				<h1>Admin dashboard</h1>
				<p>Add accommodations and manage enquiries and messages</p>
			</Container>
		</StyledAdminHero>
	);
}
