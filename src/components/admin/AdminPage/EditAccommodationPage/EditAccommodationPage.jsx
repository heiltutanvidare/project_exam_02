import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../ui/Loader/Loader";
import { API_BASE_URL } from "../../../../global/constants/api";
import Container from "../../../layout/Container/Container";
import { StyledEditAccommodationPage } from "./editAccommodationPage.styles";
import EditAccommodationForm from "../../../forms/EditAccommodationForm/EditAccommodationForm";

export default function EditAccommodationPage() {
	// get the accommodation id from the URL search params
	const { id } = useParams();

	// fetch the data using the base URL and id
	const { data, fetching, error } = useFetch(
		`${API_BASE_URL}/establishments/${id}`
	);

	if (fetching) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (error) {
		return (
			// TODO: Use the message component here
			<Container>
				<p>An error occured 😔</p>
			</Container>
		);
	}

	return (
		<StyledEditAccommodationPage>
			<Container>
				<h2>Edit your accommodation</h2>
				<EditAccommodationForm accommodation={data} />
			</Container>
		</StyledEditAccommodationPage>
	);
}
