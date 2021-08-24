import { useState, useContext, useEffect } from "react";
import AuthContext from "../../../global/contexts/AuthContext";
import MailIcon from "../../../assets/graphics/MailIcon";
import HouseIcon from "../../../assets/graphics/HouseIcon";
import QuestionIcon from "../../../assets/graphics/QuestionIcon";
import Container from "../../layout/Container/Container";
import AdminHero from "./AdminHero/AdminHero";
import { StyledAdminPage } from "./adminPage.styles";
import MessageList from "./MessageList/MessageList";
import EnquiryList from "./EnquiryList/EnquiryList";
import { useHistory } from "react-router-dom";
import AccommodationList from "./AccommodationList/AccommodationList";
import { Link } from "react-router-dom";
import Button from "../../ui/Button/Button";

export default function AdminPage() {
	const [activeView, setActiveView] = useState("accommodations");
	const [auth] = useContext(AuthContext);
	const history = useHistory();

	// Redirect user away from admin page,
	// if not logged in
	useEffect(() => {
		if (!auth) {
			history.push("/");
		}
	}, [auth, history]);

	return (
		<StyledAdminPage>
			<AdminHero />
			{auth && (
				<Container>
					<nav className="nav">
						<ul className="nav__list">
							<li
								className={`nav__list-item ${
									activeView === "accommodations"
										? "active"
										: ""
								}`}
								onClick={() => setActiveView("accommodations")}
							>
								<HouseIcon />
								<p>Accommodations</p>
							</li>
							<li
								className={`nav__list-item ${
									activeView === "enquiries" ? "active" : ""
								}`}
								onClick={() => setActiveView("enquiries")}
							>
								<QuestionIcon />
								<p>Enquiries</p>
							</li>
							<li
								className={`nav__list-item ${
									activeView === "messages" ? "active" : ""
								}`}
								onClick={() => setActiveView("messages")}
							>
								<MailIcon />
								<p>Messages</p>
							</li>
						</ul>
					</nav>

					{activeView === "enquiries" && (
						<>
							<h2>Enquiries</h2>
							<p>Enquiries from interested visitors</p>
							<EnquiryList />
						</>
					)}

					{activeView === "messages" && (
						<>
							<h2>Latest messages</h2>
							<p>
								List of messages sent by visitors using the
								contact form on the site
							</p>
							<MessageList />
						</>
					)}

					{activeView === "accommodations" && (
						<>
							<h2>Your accommodations</h2>
							<p>
								The list shows the properties you currently have
								made available for rent. The preview is
								identical to how the travelers visiting the site
								will see them. Click on a property to open edit
								mode.
							</p>
							<Button variant="outlined">
								<Link to="/add">+ Add new accommodation</Link>
							</Button>
							<AccommodationList />
						</>
					)}
				</Container>
			)}
		</StyledAdminPage>
	);
}
