import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
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
