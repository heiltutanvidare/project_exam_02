import { useState, useRef } from "react";
import PropTypes from "prop-types";
import Container from "../../layout/Container/Container";
import EnquiryForm from "../../forms/EnquityForm/EnquiryForm";
import { StyledPriceBox } from "./priceBox.styles";

export default function PriceBox({ data, search }) {
	const [showBookingForm, setShowBookingForm] = useState(false);

	const scrollPoint = useRef(null);

	function handleBookNow() {
		if (showBookingForm === false) {
			setShowBookingForm(true);
			window.scrollTo({
				top: scrollPoint?.current.offsetTop
					? scrollPoint.current.offsetTop + 800
					: 0,
				behavior: "smooth",
			});
		} else {
			setShowBookingForm(false);
			window.scrollTo({
				top: scrollPoint?.current.offsetTop
					? scrollPoint.current.offsetTop
					: 0,
				behavior: "smooth",
			});
		}
	}

	return (
		<StyledPriceBox>
			<div className="priceBox">
				<Container>
					<div className="priceBox__dates">
						<p className="priceBox__checkin">
							<span>Check in </span>
							{search.checkIn}
						</p>
						<p className="priceBox__checkout">
							<span>Check out </span>
							{search.checkOut}
						</p>
					</div>
					<div className="priceBox__bottom">
						<div>
							<p className="priceBox__price">
								<span>{data.price}$</span> / night
							</p>
							<p className="priceBox__total">
								{data.price * search.days}$ total
							</p>
						</div>
						<button
							className="priceBox__button"
							onClick={handleBookNow}
							ref={scrollPoint}
						>
							{showBookingForm ? "Close booking" : "Book now"}
						</button>
					</div>
				</Container>
			</div>

			{showBookingForm && (
				<div
					className={
						showBookingForm
							? "booking-container visible"
							: "booking-container"
					}
				>
					<EnquiryForm asBooking={true} title={data.title} />
				</div>
			)}
		</StyledPriceBox>
	);
}

PriceBox.propTypes = {
	data: PropTypes.object.isRequired,
	search: PropTypes.object.isRequired,
};
