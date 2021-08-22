import PropTypes from "prop-types";
import { StyledPretitle } from "./pretitle.styles";

export default function Pretitle({ children, align, color }) {
	return (
		<StyledPretitle align={align} color={color}>
			{children}
		</StyledPretitle>
	);
}

Pretitle.propTypes = {
	children: PropTypes.node.isRequired,
	align: PropTypes.string,
	color: PropTypes.string,
};
