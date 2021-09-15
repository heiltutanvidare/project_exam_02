import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import Accommodation from "../../accommodations/Accommodation/Accommodation";
import Container from "../../layout/Container/Container";
import { API_BASE_URL } from "../../../global/constants/api";
import useFetch from "../../../global/hooks/useFetch";
import Loader from "../../ui/Loader/Loader";
import { Fade } from "react-awesome-reveal";
import { StyledSearchResults } from "./searchResults.styles";

export default function SearchResults() {
	const { data, fetching, error } = useFetch(
		`${API_BASE_URL}/establishments`
	);

	const [search] = useContext(SearchContext);

	let numberOfDays = 1;
	if (search && search.days > 0) {
		numberOfDays = search.days;
	}

	let topResult = [];
	let restResults = data;

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
			<Container>
				<p>An error occured 😔</p>
			</Container>
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
