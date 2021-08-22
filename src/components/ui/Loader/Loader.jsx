import PropTypes from "prop-types";
import { StyledLoader } from "./loader.styles";

export default function Loader({ text }) {
	return (
		<StyledLoader>
			<div className="dots">
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
				<div className="dot"></div>
			</div>
			{text && <p className="loading__text">{text}...</p>}
		</StyledLoader>
	);
}

Loader.propTypes = {
	text: PropTypes.string,
};
