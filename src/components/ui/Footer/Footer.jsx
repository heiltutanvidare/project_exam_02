import Container from "../../layout/Container/Container";
import MailIcon from "../../../assets/graphics/MailIcon";
import PhoneIcon from "../../../assets/graphics/PhoneIcon";
import DecorativeDivider from "../DecorativeDivider/DecorativeDivider";
import MenuNav from "../Navigation/MenuNav/MenuNav";
import HolidazeLogo from "../../../assets/graphics/HolidazeLogo/HolidazeLogo";
import { StyledFooter } from "./footer.styles";

export default function Footer() {
	return (
		<StyledFooter>
			<Container>
				<div className="footer">
					<div className="footer__part">
						<address className="footer__address">
							Holidaze <br />
							220 Sleepover Blv <br />
							5020 Bergen NO
						</address>
						<div className="footer__links__container">
							<a
								className="footer__link"
								href="mailto:hey@holidaze.com"
							>
								<div className="footer__icon__container">
									<MailIcon />
								</div>
								hey@holidaze.com
							</a>
							<a className="footer__link" href="tel:04791607947">
								<div className="footer__icon__container">
									<PhoneIcon />
								</div>
								+47 222 25 555
							</a>
						</div>
						<p>Opening hours</p>
						<p className="footer__opening-hours">
							Mon–fri <span>08:00–16:00</span>
						</p>
						<p className="footer__opening-hours">
							Saturday <span>09:00–15:00</span>
						</p>
						<DecorativeDivider bg="var(--clr-drk-50)" width="10%" />
					</div>
					<div className="footer__part">
						<MenuNav />
					</div>
					<div className="footer__logo">
						<div className="footer__logo-container--01">
							<HolidazeLogo />
						</div>
						<div className="footer__logo-container--02">
							<HolidazeLogo />
						</div>
					</div>
				</div>
				<div className="footer__acknowledgement">
					<p>
						<span>Acknowledgement:</span>
					</p>
					<p>
						This website is not real and does not represent a real
						company. The website is the project exam delivery by
						student{" "}
						<a
							href="https://www.vidarh.no"
							target="_blank"
							rel="noreferrer"
						>
							Vidar Håland
						</a>
						, for the FrontEnd-development vocational study at{" "}
						<a
							href="https://www.noroff.no"
							target="_blank"
							rel="noreferrer"
						>
							Noroff School of technology and digital media.
						</a>
					</p>
				</div>
			</Container>
		</StyledFooter>
	);
}
