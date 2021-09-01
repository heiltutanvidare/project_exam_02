import PropTypes from "prop-types";
import { StyledAccommodation } from "./accommodation.styles";

export default function Accommodation({
	price,
	title,
	type,
	image,
	total,
	to,
	amenities,
}) {
	return (
		<StyledAccommodation to={to}>
			<img className="accommodation__image" src={image} alt={title} />
			<div className="content">
				<div className="details">
					<p className="accommodation__type">{type}</p>
					<p className="accommodation__title">{title}</p>
					<p className="accommodation__amenities">
						{amenities.map((amenity) => {
							return (
								<small key={amenity.id}>
									{" • "}
									{amenity.amenity}
								</small>
							);
						})}
					</p>
				</div>
				<div className="price-container">
					<p className="accommodation__price">
						<span>{price}</span> / night
					</p>
					{total && (
						<p className="accommodation__price--total">
							{total}$ total
						</p>
					)}
				</div>
			</div>
		</StyledAccommodation>
	);
}

Accommodation.propTypes = {
	price: PropTypes.number.isRequired,
	title: PropTypes.string.isRequired,
	type: PropTypes.string.isRequired,
	image: PropTypes.string.isRequired,
	total: PropTypes.number,
	to: PropTypes.string.isRequired,
	amenities: PropTypes.array,
};
