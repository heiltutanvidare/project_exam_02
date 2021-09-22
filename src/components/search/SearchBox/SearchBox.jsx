import { useContext, useRef, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import SearchContext from "../../../global/contexts/SearchContext";
import handleSearch from "../../../global/functions/handleSearch";
import Button from "../../ui/Button/Button";
import useFetch from "../../../global/hooks/useFetch";
import { API_BASE_URL } from "../../../global/constants/api";
import setMinDate from "../../../global/functions/setMinDate";
import {
	StyledForm,
	StyledField,
	StyledLabel,
	StyledInput,
	StyledFormGrid,
} from "./searchBox.styles";

export default function SearchBox() {
	const { data } = useFetch(`${API_BASE_URL}/establishments`);
	const [search, setSearch] = useContext(SearchContext);
	const history = useHistory();
	const [minCheckOut, setMinCheckOut] = useState(setMinDate);

	function handleSubmit(e) {
		e.preventDefault();
		const searchTerms = handleSearch(e);
		setSearch(searchTerms);
		if (history.location.pathname !== "/search") {
			history.push("/search");
		}
	}

	// Handle the autocomplete / typeahead
	// Will display when search input is being used
	const [display, setDisplay] = useState(false);
	const [input, setInput] = useState("");
	const inputRef = useRef(null);

	// When user selects a result
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

	// Handle if user clicks outside the result list
	const handleClickOutside = (event) => {
		if (inputRef.current && !inputRef.current.contains(event.target)) {
			setDisplay(false);
		}
	};

	return (
		<StyledForm onSubmit={handleSubmit} autoComplete="off">
			<StyledFormGrid>
				<StyledField span="all" className="suggestion" ref={inputRef}>
					<StyledLabel htmlFor="title">
						How would you like to stay?
					</StyledLabel>
					<StyledInput
						placeholder="Search for accommodations"
						id="title"
						name="title"
						onClick={() => setDisplay(true)}
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
											tabIndex="0"
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
						defaultValue={search?.checkIn || setMinDate()}
						min={setMinDate()}
						onChange={(e) => {
							setMinCheckOut(e.target.value);
						}}
					/>
				</StyledField>
				<StyledField>
					<StyledLabel htmlFor="checkout">Check out</StyledLabel>
					<input
						type="date"
						id="checkout"
						name="checkout"
						defaultValue={search?.checkOut || minCheckOut}
						min={minCheckOut}
					/>
				</StyledField>
				<Button variant="form" fullwidth>
					Search
				</Button>
			</StyledFormGrid>
		</StyledForm>
	);
}
