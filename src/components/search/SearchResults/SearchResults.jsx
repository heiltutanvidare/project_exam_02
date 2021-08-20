import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import Accommodation from "../../accommodations/Accommodation/Accommodation";
import Container from "../../layout/Container/Container";
import { StyledSearchResults } from "./searchResults.styles";
import { API_BASE_URL } from "../../../global/constants/api";
import useFetch from "../../../hooks/useFetch";
import Loader from "../../ui/Loader/Loader";

export default function SearchResults() {
	const { data, fetching, error } = useFetch(
		`${API_BASE_URL}/establishments`
	);

	const [search] = useContext(SearchContext);

	let numberOfDays = 1;
	if (search) {
		numberOfDays = search.days;
		console.log(numberOfDays);
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
			<Container>
				<p>An error occured 😔</p>
			</Container>
		);
	}

	return (
		<Container>
			<StyledSearchResults>
				{data.length > 0 &&
					data.map((accommodation) => {
						return (
							<Accommodation
								key={accommodation.id}
								price={accommodation.price}
								title={accommodation.title}
								type={accommodation.type.accommodation_type}
								image={accommodation.main_image.url}
								total={accommodation.price * numberOfDays}
							/>
						);
					})}
			</StyledSearchResults>
		</Container>
	);
}
