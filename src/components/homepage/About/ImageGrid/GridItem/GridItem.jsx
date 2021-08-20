import PropTypes from "prop-types";
import { StyledGridItem } from "./gridItem.styles";

export default function GridItem({ image }) {
	return <StyledGridItem image={image}></StyledGridItem>;
}

GridItem.propTypes = {
	image: PropTypes.string.isRequired,
};
