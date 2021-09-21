import PropTypes from "prop-types";
import { StyledContainer } from "./container.styles";

export default function Container({ children, maxWidth }) {
	return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
	maxWidth: PropTypes.string,
};

Container.defaultProps = {
	maxWidth: "var(--max-width)",
};
