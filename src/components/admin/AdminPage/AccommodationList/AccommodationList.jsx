import { useContext } from "react";
import Loader from "../../../ui/Loader/Loader";
import Message from "../../../ui/Message/Message";
import { StyledSearchResults } from "../../../search/SearchResults/searchResults.styles";
import Accommodation from "../../../accommodations/Accommodation/Accommodation";
import { API_BASE_URL } from "../../../../global/constants/api";
import useAuthenticatedFetch from "../../../../hooks/useAuthenticatedFetch";
import AuthContext from "../../../../global/contexts/AuthContext";
import { StyledAccommodationList } from "./accommodation.styles";

export default function AccommodationList() {
	const [auth] = useContext(AuthContext);

	const { data, fetching, error } = useAuthenticatedFetch(
		`${API_BASE_URL}/establishments`,
		auth
	);

	if (fetching) {
		return <Loader />;
	}

	if (error) {
		return <p>An error occured :(</p>;
	}

	if (auth && data) {
		return (
			<StyledAccommodationList>
				<StyledSearchResults>
					{data.length > 0 &&
						data.map((accommodation) => {
							return (
								<Accommodation
									key={accommodation.id}
									price={accommodation.price}
									title={accommodation.title}
									type={
										accommodation.type?.accommodation_type
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
