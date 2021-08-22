import { StyledHamburger } from "./hamburger.styles";
import { useContext } from "react";
import MenuContext from "../../../global/contexts/menuContext";

export default function Hamburger() {
	const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

	return (
		<StyledHamburger
			onClick={() => {
				if (!menuIsOpen) {
					setMenuIsOpen(true);
				}
			}}
		>
			<div className="line line--top"></div>
			<div className="line line--middle"></div>
			<div className="line line--bottom"></div>
		</StyledHamburger>
	);
}
