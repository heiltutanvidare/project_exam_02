import PropTypes from "prop-types";
import { StyledAccommodation } from "./accommodation.styles";

export default function Accommodation({
	price,
	title,
	type,
	image,
	total,
	to,
}) {
	return (
		<StyledAccommodation to={to}>
			<img className="accommodation__image" src={image} alt={title} />
			<p className="accommodation__type">{type}</p>
			<p className="accommodation__description">{title}</p>
			<p className="accommodation__price">
				<span>{price}</span> / night
			</p>
			<p className="accommodation__price--total">{total}$ total</p>
		</StyledAccommodation>
	);
}

Accommodation.propTypes = {
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	total: PropTypes.number.isRequired,
	to: PropTypes.string.isRequired,
};
