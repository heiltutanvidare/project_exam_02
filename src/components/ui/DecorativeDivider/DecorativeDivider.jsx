import PropTypes from "prop-types";
import { StyledDecorativeDivider } from "./decorativeDivider.styles";

export default function DecorativeDivider({ width, bg }) {
	return <StyledDecorativeDivider bg={bg} width={width} />;
}

DecorativeDivider.propTypes = {
	bg: PropTypes.string,
	width: PropTypes.string,
};

DecorativeDivider.defaultProps = {
	width: "100%",
	bg: "var(--clr-drk-900)",
};
