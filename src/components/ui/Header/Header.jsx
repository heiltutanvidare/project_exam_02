import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Hamburger from "../Hamburger/Hamburger";
import HolidazeLogo from "../../../assets/graphics/HolidazeLogo/HolidazeLogo";
import HeaderNav from "../Navigation/HeaderNav/HeaderNav";
import { StyledHeader } from "./header.styles";

export default function Header({ filled = true }) {
	const headingRef = useRef(null);

	useEffect(() => {
		if (!filled) {
			window.addEventListener("scroll", handleScroll);
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, [filled]);

	function handleScroll(e) {
		if (window.pageYOffset > headingRef?.current.offsetHeight) {
			headingRef?.current.classList.add("filled");
		} else {
			headingRef?.current.classList.remove("filled");
		}
	}

	return (
		<StyledHeader ref={headingRef} filled={filled}>
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
