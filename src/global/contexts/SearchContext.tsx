import React, { FC, useState } from "react";

const SearchContext = React.createContext<any>([null, () => {}]);

export const SearchProvider: FC = ({ children }) => {
	const [search, setSearch] = useState(null);
	return (
		<SearchContext.Provider value={[search, setSearch]}>
			{children}
		</SearchContext.Provider>
	);
};

export default SearchContext;
