import { StyledLoader } from "./loader.styles";

interface Props {
	text?: string;
}

export default function Loader({ text }: Props) {
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
