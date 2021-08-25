import { useContext } from "react";
import { useHistory } from "react-router-dom";
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

	// Make sure user cannot select a date in the past
	function setMinDate() {
		let d = new Date(),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		console.log([year, month, day].join("-"));
		return [year, month, day].join("-");
	}

	const history = useHistory();

	function handleSubmit(e) {
		e.preventDefault();
		const searchTerms = handleSearch(e);
		setSearch(searchTerms);
		if (history.location.pathname !== "/search") {
			history.push("/search");
		}
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
					<input
						type="date"
						id="checkin"
						name="checkin"
						defaultValue={setMinDate()}
						min={setMinDate()}
					/>
				</StyledField>
				<StyledField>
					<StyledLabel htmlFor="checkout">Check out</StyledLabel>
					<input
						type="date"
						id="checkout"
						name="checkout"
						defaultValue={setMinDate()}
						min={setMinDate()}
					/>
				</StyledField>
			</StyledFormGrid>
			<Button variant="form" fullwidth>
				Search
			</Button>
		</StyledForm>
	);
}
