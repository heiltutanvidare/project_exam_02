import PropTypes from "prop-types";
import { StyledMessage } from "./message.styles";

export default function Message({ heading, message, variant }) {
	let bg;

	if (variant === "danger") {
		bg = "var(--clr-danger)";
	} else if (variant === "success") {
		bg = "var(--clr-success)";
	}

	return (
		<StyledMessage bg={bg}>
			<h4>{heading}</h4>
			<p>{message}</p>
		</StyledMessage>
	);
}

Message.propTypes = {
	heading: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	variant: PropTypes.string,
};

Message.defaultProps = {
	variant: "general",
};
