import React from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const AuthContext = React.createContext([null, () => {}]);

export const AuthProvider = ({ children }) => {
	const [auth, setAuth] = useLocalStorage("holidazeAuthVH", null);
	return (
		<AuthContext.Provider value={[auth, setAuth]}>
			{children}
		</AuthContext.Provider>
	);
};

export default AuthContext;
