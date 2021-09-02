import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import Button from "../Button/Button";

import { StyledMessage } from "./message.styles";

export default function Message({ heading, message, variant, loader, button }) {
	let bg;

	if (variant === "danger") {
		bg = "var(--clr-danger)";
	} else if (variant === "success") {
		bg = "var(--clr-success)";
	} else if (variant === "waiting") {
		bg = "var(--clr-waiting)";
	}

	return (
		<StyledMessage bg={bg}>
			<h4>{heading}</h4>
			<p>{message}</p>
			{loader && <Loader inMessage bg={bg} />}
			{button && <Button event={button.action}>{button.text}</Button>}
		</StyledMessage>
	);
}

Message.propTypes = {
	heading: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	variant: PropTypes.string,
	loader: PropTypes.bool,
	button: PropTypes.object,
};

Message.defaultProps = {
	variant: "general",
	loader: false,
};
