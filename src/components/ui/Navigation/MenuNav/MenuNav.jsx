import { HashLink as Link } from "react-router-hash-link";
import { useContext } from "react";
import MenuContext from "../../../../global/contexts/menuContext";
import { StyledMenuNav } from "./menuNav.styles";

export default function MenuNav() {
	const [, setMenuIsOpen] = useContext(MenuContext);

	return (
		<StyledMenuNav>
			<ul>
				<li>
					<Link onClick={() => setMenuIsOpen(false)} to="/">
						Home
					</Link>
				</li>
				<li>
					<Link
						onClick={() => setMenuIsOpen(false)}
						to="/#scrollToContactUs"
					>
						Contact us
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuIsOpen(false)} to="/login">
						Log in
					</Link>
				</li>
				<li>
					<Link onClick={() => setMenuIsOpen(false)} to="/admin">
						Admin
					</Link>
				</li>
			</ul>
		</StyledMenuNav>
	);
}
