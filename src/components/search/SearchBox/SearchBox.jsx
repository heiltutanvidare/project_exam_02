import { useContext, useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchContext from "../../../global/contexts/SearchContext";
import handleSearch from "../../../global/functions/handleSearch";
import Button from "../../ui/Button/Button";
import useFetch from "../../../hooks/useFetch";
import { API_BASE_URL } from "../../../global/constants/api";
import {
	StyledForm,
	StyledField,
	StyledLabel,
	StyledInput,
	StyledFormGrid,
} from "./searchBox.styles";

export default function SearchBox() {
	const [, setSearch] = useContext(SearchContext);
	const { data } = useFetch(`${API_BASE_URL}/establishments`);

	const history = useHistory();

	// Make sure user cannot select a date in the past
	function setMinDate() {
		let d = new Date(),
			month = "" + (d.getMonth() + 1),
			day = "" + d.getDate(),
			year = d.getFullYear();

		if (month.length < 2) month = "0" + month;
		if (day.length < 2) day = "0" + day;

		return [year, month, day].join("-");
	}

	function handleSubmit(e) {
		e.preventDefault();
		const searchTerms = handleSearch(e);
		setSearch(searchTerms);
		if (history.location.pathname !== "/search") {
			history.push("/search");
		}
	}

	// Handle the autocomplete / typeahead
	const [display, setDisplay] = useState(false);
	const [input, setInput] = useState("");
	const inputRef = useRef(null);
	// const [options, setOptions] = useState([]);

	const setSearchValue = (title) => {
		setInput(title);
		setDisplay(false);
	};

	useEffect(() => {
		document.addEventListener("mousedown", handleClickOutside);

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, []);

	const handleClickOutside = (event) => {
		if (inputRef.current && !inputRef.current.contains(event.target)) {
			setDisplay(false);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit} autoComplete="off">
			<StyledFormGrid>
				<StyledField span="all" className="suggestion" ref={inputRef}>
					<StyledLabel htmlFor="location">
						How would you like to stay?
					</StyledLabel>
					<StyledInput
						placeholder="Search for accommodations"
						id="location"
						name="location"
						onClick={() => setDisplay(!display)}
						value={input}
						onChange={(event) => setInput(event.target.value)}
					/>
					{display && (
						<div className="suggestion__container">
							{data
								.filter(
									({ title }) =>
										title
											.toLowerCase()
											.indexOf(input.toLowerCase()) > -1
								)
								.map((value) => {
									return (
										<div
											className="suggestion__option"
											key={value.id}
											onClick={() =>
												setSearchValue(value.title)
											}
										>
											<span>{value.title}</span>
											<img
												src={value.main_image.url}
												alt={value.title}
											/>
										</div>
									);
								})}
						</div>
					)}
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
