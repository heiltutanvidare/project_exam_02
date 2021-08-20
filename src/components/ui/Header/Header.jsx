import { useRef, useEffect } from "react";
import Hamburger from "../Hamburger/Hamburger";
import Logo from "../Logo/Logo";
import { StyledHeader } from "./header.styles";

export default function Header() {
	const headerRef = useRef();
	useEffect(() => {
		console.log(headerRef.current.offsetHeight);
		window.addEventListener("scroll", () => {
			let scrollDistance = window.scrollY;
			if (scrollDistance > headerRef.current.offsetHeight / 2) {
				headerRef.current.classList.add("filled");
			} else if (scrollDistance < headerRef.current.offsetHeight / 2) {
				headerRef.current.classList.remove("filled");
			}
		});
	}, []);

	return (
		<StyledHeader ref={headerRef}>
			<div className="inner max-width">
				<Logo content="Holidaze" href="/" />
				<Hamburger />
			</div>
		</StyledHeader>
	);
}
