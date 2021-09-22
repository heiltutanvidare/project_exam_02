import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Hamburger from "../Hamburger/Hamburger";
import HolidazeLogo from "../../../assets/graphics/HolidazeLogo/HolidazeLogo";
import HeaderNav from "../Navigation/HeaderNav/HeaderNav";
import { StyledHeader } from "./header.styles";

export default function Header({ filled = true }) {
	// The header is filled with a translucent version of the primary color,
	// but on the home page, the header is transparent when on top of the hero image.
	// Using a scroll event listener, the header will get the color applied after the user scrolls down.
	// This does not happen if the prop "filled" is set to true

	const headingRef = useRef(null);

	useEffect(() => {
		if (!filled) {
			window.addEventListener("scroll", handleScroll);
		}
		return () => window.removeEventListener("scroll", handleScroll);
	}, [filled]);

	function handleScroll(e) {
		if (headingRef.current) {
			if (window.pageYOffset > headingRef.current.offsetHeight) {
				headingRef?.current.classList.add("filled");
			} else {
				headingRef?.current.classList.remove("filled");
			}
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
