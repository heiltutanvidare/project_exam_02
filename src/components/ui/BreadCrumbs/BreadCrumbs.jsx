import { Link } from "react-router-dom";
import Container from "../../layout/Container/Container";
import { StyledBreadCrumbs } from "./breadCrumbs.styles";

export default function BreadCrumbs() {
	return (
		<Container>
			<StyledBreadCrumbs>
				<Link to="/">&lsaquo; Home</Link>
				<p>•</p>
				<Link to="/search">Search</Link>
			</StyledBreadCrumbs>
		</Container>
	);
}
