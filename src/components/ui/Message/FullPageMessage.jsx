import PropTypes from "prop-types";
import Message from "./Message";
import { StyledFullPageContainer } from "./message.styles";

export default function FullPageMessage({
	variant,
	heading,
	message,
	loader,
	button,
}) {
	return (
		<StyledFullPageContainer>
			<div className="inner">
				<Message
					variant={variant}
					message={message}
					heading={heading}
					loader={loader}
					button={button}
				/>
			</div>
		</StyledFullPageContainer>
	);
}

FullPageMessage.propTypes = {
	heading: PropTypes.string.isRequired,
	message: PropTypes.string.isRequired,
	variant: PropTypes.string,
	loader: PropTypes.bool,
	button: PropTypes.object,
};

FullPageMessage.defaultProps = {
	variant: "general",
	loader: false,
};
