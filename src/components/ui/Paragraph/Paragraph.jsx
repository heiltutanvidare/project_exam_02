import PropTypes from "prop-types";
import { StyledParagraph } from "./paragraph.styles";

export default function Paragraph({ children, align = "left" }) {
	return <StyledParagraph align={align}>{children}</StyledParagraph>;
}

Paragraph.propTypes = {
	align: PropTypes.string,
	children: PropTypes.node.isRequired,
};
