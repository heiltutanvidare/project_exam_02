import { Helmet } from "react-helmet-async";
import AddAccommodationForm from "../../../forms/AddAccommodationForm/AddAccommodationForm";
import Container from "../../../layout/Container/Container";
import { StyledAddAccommodationPage } from "./addAccommodationPage.styles";

export default function AddAccommodationPage() {
	return (
		<StyledAddAccommodationPage>
			<Helmet>
				<title>Holidaze | Add new accommodation</title>
			</Helmet>
			<Container>
				<h2>Add a new accommodation</h2>
				<AddAccommodationForm />
			</Container>
		</StyledAddAccommodationPage>
	);
}
