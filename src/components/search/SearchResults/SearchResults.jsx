import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import Accommodation from "../../accommodations/Accommodation/Accommodation";
import Container from "../../layout/Container/Container";
import Message from "../../ui/Message/Message";
import { API_BASE_URL } from "../../../global/constants/api";
import useFetch from "../../../global/hooks/useFetch";
import Loader from "../../ui/Loader/Loader";
import { Fade } from "react-awesome-reveal";
import { StyledSearchResults } from "./searchResults.styles";

export default function SearchResults() {
	// Get accommodations from the API
	const { data, fetching, error } = useFetch(
		`${API_BASE_URL}/establishments`
	);

	// Get the search from context, so that number of days
	// will be calculated into the total price
	const [search] = useContext(SearchContext);

	let numberOfDays = 1;

	// Set number of days to what is in the search if the search exists
	if (search && search.days > 0) {
		numberOfDays = search.days;
	}

	let topResult = [];
	let restResults = data;

	// Set the top result to be what the user searched for
	// if he or she wrote in the search field,
	// else no top result will show,
	// but all accommodations will still show
	if (search) {
		topResult = data.filter(
			({ title }) => title.toLowerCase() === search.title.toLowerCase()
		);
		restResults = data.filter(
			({ title }) => title.toLowerCase() !== search.title.toLowerCase()
		);
	}

	if (fetching) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (error) {
		return (
			<Message
				variant="danger"
				heading="Something went wrong"
				message="We are sorry but we could not load the accommodations at this time. Please try again later."
			/>
		);
	}

	return (
		<StyledSearchResults>
			{topResult.length > 0 && (
				<>
					<h2>Place matching your search:</h2>
					<Fade direction="left" duration="450">
						<Accommodation
							price={topResult[0].price}
							title={topResult[0].title}
							type={topResult[0].type.accommodation_type}
							image={topResult[0].main_image.url}
							amenities={topResult[0].amenities}
							total={Math.floor(
								topResult[0].price * numberOfDays
							)}
							to={`accommodation/${topResult[0].id}`}
						/>
					</Fade>
					<h3>Other accommodations you might enjoy</h3>
				</>
			)}
			<Fade direction="left" duration="450">
				{restResults.length > 0 &&
					restResults.map((accommodation) => {
						return (
							<Accommodation
								key={accommodation.id}
								price={accommodation.price}
								title={accommodation.title}
								type={accommodation.type.accommodation_type}
								image={accommodation.main_image.url}
								amenities={accommodation.amenities}
								total={Math.floor(
									accommodation.price * numberOfDays
								)}
								to={`accommodation/${accommodation.id}`}
							/>
						);
					})}
			</Fade>
		</StyledSearchResults>
	);
}
