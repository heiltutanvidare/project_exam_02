import Contact from "../../homepage/About/Contact/Contact";
import Container from "../../layout/Container/Container";
import { StyledMenuOverlay } from "./menuOverlay.styles";

export default function MenuOverlay() {
	return (
		<StyledMenuOverlay>
			<Container>
				<h2>Reach us directly</h2>
				<p>How can we help?</p>
				<address>
					Holidaze <br />
					220 Sleepover Blv <br />
					5020 Bergen NO
				</address>
				<a href="mailto:hey@holidaze.com">hey@holidaze.com</a>
				<a href="tel:04791607947">+47 916 07 947</a>
				<p>Opening hours</p>
				<p>
					Mon–fri <span>08:00–16:00</span>
				</p>
				<p>
					Saturday <span>09:00–15:00</span>
				</p>

				<h2>Enquire about an accommodation?</h2>
				<p>We always respond within 24 working hours</p>
				<Contact />
			</Container>
		</StyledMenuOverlay>
	);
}
