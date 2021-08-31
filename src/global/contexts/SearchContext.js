import React from "react";
import useLocalStorage from "../../hooks/useLocalStorage";

const SearchContext = React.createContext([null, () => {}]);

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useLocalStorage("holidazeSearch", null);
	return (
		<SearchContext.Provider value={[search, setSearch]}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
