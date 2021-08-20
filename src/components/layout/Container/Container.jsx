import PropTypes from "prop-types";
import { StyledContainer } from "./container.styles";

export default function Container({ children }) {
	return <StyledContainer>{children}</StyledContainer>;
}

Container.propTypes = {
	children: PropTypes.node.isRequired,
};
