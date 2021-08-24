import { useContext } from "react";
import AuthContext from "../../../../global/contexts/AuthContext";
import Button from "../../Button/Button";
import { HashLink as Link } from "react-router-hash-link";
import MenuContext from "../../../../global/contexts/menuContext";
import { useHistory } from "react-router-dom";
import { StyledMenuNav } from "./menuNav.styles";

export default function MenuNav() {
	const [, setMenuIsOpen] = useContext(MenuContext);
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function handleLogOut() {
		const doLogOut = window.confirm("Are you sure you want to log out?");
		if (doLogOut) {
			setAuth(null);
			setMenuIsOpen(false);
			history.push("/");
		}
	}

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
					{!auth && (
						<Link onClick={() => setMenuIsOpen(false)} to="/login">
							Log in
						</Link>
					)}
				</li>
				{auth && (
					<>
						<li>
							<Link
								onClick={() => setMenuIsOpen(false)}
								to="/admin"
							>
								Admin
							</Link>
						</li>
						<li onClick={handleLogOut}>
							<Button color="light" variant="outlined">
								Log out
							</Button>
						</li>
					</>
				)}
			</ul>
		</StyledMenuNav>
	);
}
