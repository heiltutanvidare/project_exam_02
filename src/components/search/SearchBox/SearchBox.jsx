import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import handleSearch from "../../../global/functions/handleSearch";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";
import {
	StyledForm,
	StyledField,
	StyledLabel,
	StyledInput,
	StyledFormGrid,
} from "./searchBox.styles";

export default function SearchBox() {
	const [search, setSearch] = useContext(SearchContext);
	console.log("Search in Context is:", search);

	function handleSubmit(e) {
		e.preventDefault();
		const searchTerms = handleSearch(e);
		console.log("Searchterms are:", searchTerms);
		setSearch(searchTerms);
		console.log("Search in Context is:", search);
	}

	return (
		<Container>
			<StyledForm onSubmit={handleSubmit}>
				<StyledFormGrid>
					<StyledField>
						<StyledLabel htmlFor="location">Location</StyledLabel>
						<StyledInput
							placeholder="Bergen"
							id="location"
							name="location"
						/>
					</StyledField>
					<StyledField>
						<StyledLabel htmlFor="guests">Guests</StyledLabel>
						<StyledInput
							placeholder="2"
							id="guests"
							name="guests"
							type="number"
						/>
					</StyledField>
					<StyledField>
						<StyledLabel htmlFor="checkin">Check in</StyledLabel>
						<StyledInput type="date" id="checkin" name="checkin" />
					</StyledField>
					<StyledField>
						<StyledLabel htmlFor="checkout">Check out</StyledLabel>
						<StyledInput
							type="date"
							id="checkout"
							name="checkout"
						/>
					</StyledField>
				</StyledFormGrid>
				<Button variant="form" fullwidth>
					Search
				</Button>
			</StyledForm>
		</Container>
	);
}
