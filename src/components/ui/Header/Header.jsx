import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import { StyledHeader } from "./header.styles";

export default function Header({ filled = true }) {
	const headerRef = useRef();

	useEffect(() => {
		if (!filled) {
			headerRef.current.classList.remove("filled");
			window.addEventListener("scroll", () => {
				let scrollDistance = window.scrollY;
				if (scrollDistance > headerRef.current.offsetHeight / 2) {
					headerRef.current.classList.add("filled");
				} else if (
					scrollDistance <
					headerRef.current.offsetHeight / 2
				) {
					headerRef.current.classList.remove("filled");
				}
			});
		}
	}, [filled]);

	return (
		<StyledHeader ref={headerRef} filled={filled}>
			<div className="inner max-width">
				<Logo content="Holidaze" href="/" />
				<Hamburger />
			</div>
		</StyledHeader>
	);
}

Header.propTypes = {
	filled: PropTypes.bool.isRequired,
};
