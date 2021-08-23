import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import SearchResults from "../SearchResults/SearchResults";

export default function SearchPage() {
	const [search] = useContext(SearchContext);

	if (search?.days) {
		return (
			<section>
				<SearchResults />
			</section>
		);
	} else {
		return <></>;
	}
}
