import { useContext, useRef } from "react";
import PropTypes from "prop-types";
import Container from "../../layout/Container/Container";
import BookingContext from "../../../global/contexts/bookingContext";
import scrollToElement from "../../../global/functions/scrollToElement";
import { StyledPriceBox } from "./priceBox.styles";

export default function PriceBox({ data, search }) {
	const [bookingIsVisible, setBookingIsVisible] = useContext(BookingContext);

	const priceBoxRef = useRef(null);

	function showBookingForm() {
		if (bookingIsVisible) {
			setBookingIsVisible(false);
		} else {
			setBookingIsVisible(true);
		}
		scrollToElement(null);
	}

	return (
		<StyledPriceBox sticky={bookingIsVisible ? false : true}>
			<div className="priceBox" ref={priceBoxRef}>
				<Container maxWidth="640px">
					<div className="priceBox__dates">
						<p className="priceBox__checkin">
							<span>Check in </span>
							{search?.checkIn ? search.checkIn : ""}
						</p>
						<p className="priceBox__checkout">
							<span>Check out </span>
							{search?.checkOut ? search.checkOut : ""}
						</p>
					</div>
					<div className="priceBox__bottom">
						<div>
							<p className="priceBox__price">
								<span>{data.price}$</span> / night
							</p>
							<p className="priceBox__total">
								{search?.days
									? Math.floor(data.price * search?.days)
									: data.price}
								$ total
							</p>
						</div>
						<button
							className="priceBox__button"
							onClick={showBookingForm}
						>
							{bookingIsVisible
								? "Close booking form"
								: "Book now"}
						</button>
					</div>
				</Container>
			</div>
		</StyledPriceBox>
	);
}

PriceBox.propTypes = {
	data: PropTypes.object.isRequired,
	search: PropTypes.object.isRequired,
};
