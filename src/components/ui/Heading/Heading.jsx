import PropTypes from "prop-types";
import { StyledHeading } from "./heading.styles";
import Pretitle from "../Pretitle/Pretitle";

export default function Heading({
	content,
	pretitle,
	align = "left",
	heroTitle = false,
}) {
	return (
		<>
			{pretitle && <Pretitle align={align}>{pretitle}</Pretitle>}
			<StyledHeading align={align} heroTitle={heroTitle}>
				{content}
			</StyledHeading>
		</>
	);
}

Heading.propTypes = {
	content: PropTypes.string.isRequired,
	pretitle: PropTypes.string,
	align: PropTypes.string,
	heroTitle: PropTypes.bool,
};

Heading.defaultProps = {
	align: "left",
	heroTitle: false,
};
