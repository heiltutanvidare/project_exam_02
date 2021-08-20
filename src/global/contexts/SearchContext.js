import React, { useState } from "react";

const SearchContext = React.createContext([null, () => {}]);

export const SearchProvider = ({ children }) => {
	const [search, setSearch] = useState(null);
	return (
		<SearchContext.Provider value={[search, setSearch]}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
