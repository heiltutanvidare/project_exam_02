import { Helmet } from "react-helmet-async";
import { useParams } from "react-router-dom";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../ui/Loader/Loader";
import { API_BASE_URL } from "../../../../global/constants/api";
import Container from "../../../layout/Container/Container";
import { StyledEditAccommodationPage } from "./editAccommodationPage.styles";
import EditAccommodationForm from "../../../forms/EditAccommodationForm/EditAccommodationForm";
import Message from "../../../ui/Message/Message";

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
			<Container>
				<Message
					variant="danger"
					heading="An error occured"
					message="Failed while loading the data. We are sorry for the inconveniance, and hope to have the issue sorted out soon."
				/>
			</Container>
		);
	}

	return (
		<StyledEditAccommodationPage>
			<Helmet>
				<title>Holidaze | Edit {data.title}</title>
			</Helmet>
			<Container>
				<h2>Edit your accommodation</h2>
				<EditAccommodationForm accommodation={data} />
			</Container>
		</StyledEditAccommodationPage>
	);
}
