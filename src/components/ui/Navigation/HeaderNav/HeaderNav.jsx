import { useContext } from "react";
import AuthContext from "../../../../global/contexts/AuthContext";
import Button from "../../Button/Button";
import { HashLink as Link } from "react-router-hash-link";
import { useHistory } from "react-router-dom";
import { StyledHeaderNav } from "./headerNav.styles";

export default function HeaderNav() {
	const [auth, setAuth] = useContext(AuthContext);

	const history = useHistory();

	function handleLogOut() {
		const doLogOut = window.confirm("Are you sure you want to log out?");
		if (doLogOut) {
			setAuth(null);
			history.push("/");
		}
	}

	return (
		<StyledHeaderNav>
			<ul>
				<li
					className={
						history.location.pathname === "/" ? "active" : ""
					}
				>
					<Link to="/">Home</Link>
				</li>
				<li>
					<Link to="/#scrollToContactUs">Contact us</Link>
				</li>
				{!auth && (
					<li
						className={
							history.location.pathname === "/login"
								? "active"
								: ""
						}
					>
						<Link to="/login">Log in</Link>
					</li>
				)}
				{auth && (
					<>
						<li
							className={
								history.location.pathname === "/admin"
									? "active"
									: ""
							}
						>
							<Link to="/admin">Admin</Link>
						</li>
						<li>
							<Button
								color="light"
								variant="outlined"
								fullwidth={false}
								event={handleLogOut}
							>
								Log out
							</Button>
						</li>
					</>
				)}
			</ul>
		</StyledHeaderNav>
	);
}
