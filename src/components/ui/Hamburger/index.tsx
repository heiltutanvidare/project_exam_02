import { StyledHamburger } from "./hamburger.styles";

export default function Hamburger() {
	return (
		<StyledHamburger>
			<div className="line line--top"></div>
			<div className="line line--middle"></div>
			<div className="line line--bottom"></div>
		</StyledHamburger>
	);
}
