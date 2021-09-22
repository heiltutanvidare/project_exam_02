import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import SearchBox from "../SearchBox/SearchBox";
import SearchResults from "../SearchResults/SearchResults";
import Container from "../../layout/Container/Container";
import Paragraph from "../../ui/Paragraph/Paragraph";
import DecorativeDivider from "../../ui/DecorativeDivider/DecorativeDivider";
import { StyledSearchPage } from "./searchPage.styles";

export default function SearchPage() {
	// Get search from context
	const [search] = useContext(SearchContext);

	if (search?.days) {
		return (
			<StyledSearchPage>
				<Container>
					<SearchBox />
					<SearchResults />
				</Container>
			</StyledSearchPage>
		);
	} else {
		return (
			<StyledSearchPage>
				<Container>
					<SearchBox />
					<Paragraph>
						Looking for accommodations? Use the search box above to
						find your next place to stay 🏠
					</Paragraph>
				</Container>
				<DecorativeDivider />
			</StyledSearchPage>
		);
	}
}
