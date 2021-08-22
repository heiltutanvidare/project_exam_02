import React, { useState } from "react";

const MenuContext = React.createContext([null, () => {}]);

export const MenuContextProvider = ({ children }) => {
	const [menuIsOpen, setMenuIsOpen] = useState(false);
	return (
		<MenuContext.Provider value={[menuIsOpen, setMenuIsOpen]}>
			{children}
		</MenuContext.Provider>
	);
};

export default MenuContext;
