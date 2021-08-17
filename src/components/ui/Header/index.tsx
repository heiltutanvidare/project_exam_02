import Hamburger from "../Hamburger";
import Logo from "../Logo";
import { StyledHeader } from "./header.styles";

export default function Header() {
	return (
		<StyledHeader>
			<div className="inner max-width">
				<Logo content="Holidaze" href="/" />
				<Hamburger />
			</div>
		</StyledHeader>
	);
}
