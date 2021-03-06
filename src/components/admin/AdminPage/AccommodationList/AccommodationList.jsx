import { useContext } from "react";
import Loader from "../../../ui/Loader/Loader";
import Message from "../../../ui/Message/Message";
import { StyledSearchResults } from "../../../search/SearchResults/searchResults.styles";
import Accommodation from "../../../accommodations/Accommodation/Accommodation";
import { API_BASE_URL } from "../../../../global/constants/api";
import useAuthenticatedFetch from "../../../../global/hooks/useAuthenticatedFetch";
import AuthContext from "../../../../global/contexts/AuthContext";
import { Fade } from "react-awesome-reveal";
import { StyledAccommodationList } from "./accommodation.styles";

export default function AccommodationList() {
	// Getting auth if any from the context
	const [auth] = useContext(AuthContext);

	// Fetch data from the API
	let { data, fetching, error } = useAuthenticatedFetch(
		`${API_BASE_URL}/establishments`,
		auth
	);

	if (fetching) {
		return <Loader text="Loading accommodations" />;
	}

	if (error) {
		return (
			<Message
				variant="danger"
				heading="Something went wrong"
				message="We are sorry but we could not fetch the accommodations at this time. Please try again later."
			/>
		);
	}

	if (auth && data) {
		return (
			<StyledAccommodationList>
				<StyledSearchResults>
					<Fade duration="450">
						{data.length > 0 &&
							data.map((accommodation) => {
								return (
									<Accommodation
										key={accommodation.id}
										price={accommodation.price}
										title={accommodation.title}
										amenities={accommodation.amenities}
										type={
											accommodation.type
												?.accommodation_type
												? accommodation.type
														.accommodation_type
												: "Who knows"
										}
										image={
											accommodation.main_image?.url
												? accommodation.main_image.url
												: "https://picsum.photos/200/300"
										}
										to={`edit/${accommodation.id}`}
									/>
								);
							})}
					</Fade>
				</StyledSearchResults>
			</StyledAccommodationList>
		);
	} else
		return (
			<Message
				variant="danger"
				heading="You are logged out"
				message="Only users who are logged in can edit accommodations."
			/>
		);
}
