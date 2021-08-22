import Contact from "../../homepage/About/Contact/Contact";
import Container from "../../layout/Container/Container";
import { StyledMenuOverlay } from "./menuOverlay.styles";
import close from "../../../assets/graphics/Close.svg";
import MailIcon from "../../../assets/graphics/MailIcon";
import PhoneIcon from "../../../assets/graphics/PhoneIcon";

export default function MenuOverlay() {
	return (
		<StyledMenuOverlay>
			<Container>
				<button className="menu__close__button">
					Close <img src={close} alt="Close the overlay meny" />
				</button>
				<h2 className="menu__title">
					Reach us <span>directly</span>
				</h2>
				<p className="menu__text">How can we help?</p>
				<address className="menu__address">
					Holidaze <br />
					220 Sleepover Blv <br />
					5020 Bergen NO
				</address>
				<div className="menu__links__container">
					<a className="menu__link" href="mailto:hey@holidaze.com">
						<div className="menu__icon__container">
							<MailIcon />
						</div>
						hey@holidaze.com
					</a>
					<a className="menu__link" href="tel:04791607947">
						<div className="menu__icon__container">
							<PhoneIcon />
						</div>
						+47 916 07 947
					</a>
				</div>
				<p>Opening hours</p>
				<p className="menu__opening-hours">
					Mon–fri <span>08:00–16:00</span>
				</p>
				<p className="menu__opening-hours">
					Saturday <span>09:00–15:00</span>
				</p>

				<h2 className="menu__title">
					Enquire about <span>an accommodation?</span>
				</h2>
				<p className="menu__text">
					We always respond within 24 working hours
				</p>
				<Contact />
			</Container>
		</StyledMenuOverlay>
	);
}
