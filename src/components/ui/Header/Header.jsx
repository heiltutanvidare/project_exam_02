import PropTypes from "prop-types";
import Hamburger from "../Hamburger/Hamburger";
import HolidazeLogo from "../../../assets/graphics/HolidazeLogo/HolidazeLogo";

import { StyledHeader } from "./header.styles";

export default function Header({ filled = true }) {
	return (
		<StyledHeader filled={filled}>
			<div className="inner max-width">
				<HolidazeLogo />

				<Hamburger />
			</div>
		</StyledHeader>
	);
}

Header.propTypes = {
	filled: PropTypes.bool.isRequired,
};
