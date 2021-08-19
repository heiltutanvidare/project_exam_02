import React, { useState } from "react";

// Search state saved in context to
// make it avbailable for the search components

const SearchContext = React.createContext([null, () => {}]);

interface Props {
	children: React.ReactNode;
}

export const SearchProvider = ({ children }: Props) => {
	const [search, setSearch]: any = useState({});
	return (
		<SearchContext.Provider value={[search, setSearch]}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
