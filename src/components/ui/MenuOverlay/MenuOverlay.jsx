import { useContext } from "react";
import MenuContext from "../../../global/contexts/menuContext";
import Container from "../../layout/Container/Container";
import close from "../../../assets/graphics/Close.svg";
import MailIcon from "../../../assets/graphics/MailIcon";
import PhoneIcon from "../../../assets/graphics/PhoneIcon";
import EnquiryForm from "../../forms/EnquiryForm/EnquiryForm";
import MenuNav from "../Navigation/MenuNav/MenuNav";
import DecorativeDivider from "../DecorativeDivider/DecorativeDivider";
import { StyledMenuOverlay } from "./menuOverlay.styles";

export default function MenuOverlay() {
	const [menuIsOpen, setMenuIsOpen] = useContext(MenuContext);

	// Close the overlay menu if user clicks outside the menu
	function handleMenuClick(e) {
		if (e.target.classList.contains("outer")) {
			setMenuIsOpen(false);
		}
	}

	return (
		<StyledMenuOverlay
			open={menuIsOpen}
			className="outer"
			onClick={(e) => {
				handleMenuClick(e);
			}}
		>
			<div className="inner">
				<Container>
					<button
						className="menu__close__button"
						onClick={() => {
							if (menuIsOpen) {
								setMenuIsOpen(false);
							}
						}}
					>
						Close <img src={close} alt="Close the overlay menu" />
					</button>

					<div className="mobile-only">
						<MenuNav />
					</div>

					<div className="menu__grid">
						<div className="menu__grid__item menu__grid__item--info">
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
								<a
									className="menu__link"
									href="mailto:hey@holidaze.com"
								>
									<div className="menu__icon__container">
										<MailIcon />
									</div>
									hey@holidaze.com
								</a>
								<a
									className="menu__link"
									href="tel:04791607947"
								>
									<div className="menu__icon__container">
										<PhoneIcon />
									</div>
									+47 222 25 555
								</a>
							</div>
							<p>Opening hours</p>
							<p className="menu__opening-hours">
								Mon–fri <span>08:00–16:00</span>
							</p>
							<p className="menu__opening-hours">
								Saturday <span>09:00–15:00</span>
							</p>
							<DecorativeDivider
								bg="var(--clr-drk-50)"
								width="10%"
							/>
						</div>
						<div className="menu__grid__item menu__grid__item--enquiry">
							<h2
								className="menu__title"
								id="scrollToEnquiryForm"
							>
								Enquire about <span>an accommodation?</span>
							</h2>
							<p className="menu__text">
								We normally respond within{" "}
								<span>24 working hours</span>
							</p>
							<EnquiryForm />
						</div>
					</div>
				</Container>
			</div>
		</StyledMenuOverlay>
	);
}
