import PropTypes from "prop-types";
import { StyledDecorativeImage } from "./decorativeImage.styles";

export default function DecorativeImage({ image, height }) {
	return <StyledDecorativeImage image={image} height={height} />;
}

DecorativeImage.propTypes = {
	image: PropTypes.string.isRequired,
	height: PropTypes.string,
};
