import PropTypes from "prop-types";
import {
	StyledButtonOutline,
	StyledButtonFilled,
	StyledButtonForm,
} from "./button.styles";
import search from "../../../assets/graphics/Search.svg";

export default function Button({
	fullwidth,
	children,
	href,
	variant = "filled",
	color = "dark",
	align,
	event,
}) {
	if (variant === "outlined") {
		return (
			<StyledButtonOutline
				color={color}
				fullwidth={fullwidth}
				align={align}
				onClick={event}
			>
				{children}
			</StyledButtonOutline>
		);
	} else if (variant === "form") {
		return (
			<StyledButtonForm
				color={color}
				onClick={event}
				fullwidth={fullwidth}
				align={align}
			>
				<img src={search} alt="Search icon" />
				{children}
			</StyledButtonForm>
		);
	} else {
		return (
			<StyledButtonFilled
				color={color}
				fullwidth={fullwidth}
				align={align}
				onClick={event}
			>
				{children}
			</StyledButtonFilled>
		);
	}
}

Button.propTypes = {
	children: PropTypes.node.isRequired,
	href: PropTypes.string,
	align: PropTypes.string,
	fullwidth: PropTypes.bool,
	variant: PropTypes.string.isRequired,
	color: PropTypes.string.isRequired,
	event: PropTypes.func,
};

Button.defaultProps = {
	variant: "filled",
	color: "dark",
};
