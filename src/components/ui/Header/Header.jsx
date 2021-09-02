import PropTypes from "prop-types";
import Hamburger from "../Hamburger/Hamburger";
import HolidazeLogo from "../../../assets/graphics/HolidazeLogo/HolidazeLogo";
import HeaderNav from "../Navigation/HeaderNav/HeaderNav";
import { StyledHeader } from "./header.styles";

export default function Header({ filled = true }) {
	return (
		<StyledHeader filled={filled}>
			<div className="inner max-width">
				<HolidazeLogo />
				<div className="left">
					<HeaderNav />
					<Hamburger />
				</div>
			</div>
		</StyledHeader>
	);
}

Header.propTypes = {
	filled: PropTypes.bool.isRequired,
};
