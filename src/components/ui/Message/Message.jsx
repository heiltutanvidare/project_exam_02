import PropTypes from "prop-types";
import Loader from "../Loader/Loader";
import { StyledMessage } from "./message.styles";

export default function Message({ heading, message, variant, loader }) {
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
		</StyledMessage>
	);
}

Message.propTypes = {
	heading: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	variant: PropTypes.string,
	loader: PropTypes.bool,
};

Message.defaultProps = {
	variant: "general",
	loader: false,
};
