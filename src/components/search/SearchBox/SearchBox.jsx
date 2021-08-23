import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import handleSearch from "../../../global/functions/handleSearch";
import Button from "../../ui/Button/Button";
import {
	StyledForm,
	StyledField,
	StyledLabel,
	StyledInput,
	StyledFormGrid,
} from "./searchBox.styles";

export default function SearchBox() {
	const [, setSearch] = useContext(SearchContext);

	function handleSubmit(e) {
		e.preventDefault();
		const searchTerms = handleSearch(e);
		setSearch(searchTerms);
	}

	return (
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
					<input type="date" id="checkin" name="checkin" />
				</StyledField>
				<StyledField>
					<StyledLabel htmlFor="checkout">Check out</StyledLabel>
					<input type="date" id="checkout" name="checkout" />
				</StyledField>
			</StyledFormGrid>
			<Button variant="form" fullwidth>
				Search
			</Button>
		</StyledForm>
	);
}
