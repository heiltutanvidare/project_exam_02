import PropTypes from "prop-types";
import { StyledLogo } from "./logo.styles";

export default function Logo({ content, href = "/" }) {
	return <StyledLogo to={href}>{content}</StyledLogo>;
}

Logo.propTypes = {
	content: PropTypes.string.isRequired,
	href: PropTypes.string,
};
