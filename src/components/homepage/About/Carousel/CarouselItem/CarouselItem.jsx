import PropTypes from "prop-types";
import { StyledCarouselItem } from "./carouselitem.styles";

export default function CarouselItem({ image, heading }) {
	return (
		<StyledCarouselItem image={image}>
			<div className="overlay"></div>
			<h2>{heading}</h2>
		</StyledCarouselItem>
	);
}

CarouselItem.propTypes = {
	image: PropTypes.string.isRequired,
	heading: PropTypes.string.isRequired,
};
