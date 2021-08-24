import React from "react";
import AddAccommodationForm from "../../../forms/AddAccommodationForm/AddAccommodationForm";
import Container from "../../../layout/Container/Container";
import { StyledAddAccommodationPage } from "./addAccommodationPage.styles";

export default function AddAccommodationPage() {
	return (
		<StyledAddAccommodationPage>
			<Container>
				<h2>Add a new accommodation</h2>
				<AddAccommodationForm />
			</Container>
		</StyledAddAccommodationPage>
	);
}
