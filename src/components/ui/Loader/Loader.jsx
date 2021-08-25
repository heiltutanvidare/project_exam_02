import PropTypes from "prop-types";
import { StyledLoader } from "./loader.styles";

export default function Loader({ text, inMessage, bg }) {
	return (
		<StyledLoader inMessage={inMessage} bg={bg}>
			<div className="dots">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			{text && <p className="loading__text">{text}</p>}
		</StyledLoader>
	);
}

Loader.propTypes = {
	text: PropTypes.string,
	bg: PropTypes.string,
	inMessage: PropTypes.bool,
};

Loader.defaultProps = {
	variant: "general",
	inMessage: false,
	bg: "var(--clr-drk-600)",
};
