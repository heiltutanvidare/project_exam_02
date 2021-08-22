import PropTypes from "prop-types";
import { StyledDecorativeDivider } from "./decorativeDiivider.styles";

export default function DecorativeDivider({ width, bg }) {
	return <StyledDecorativeDivider bg={bg} width={width} />;
}

DecorativeDivider.propTypes = {
	bg: PropTypes.string.isRequired,
	width: PropTypes.string.isRequired,
};
