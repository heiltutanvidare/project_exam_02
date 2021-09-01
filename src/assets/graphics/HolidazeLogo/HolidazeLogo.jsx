import { useHistory } from "react-router-dom";
import { StyledHolidazeLogo } from "./holidazeLogo.styles";

export default function HolidazeLogo() {
	const history = useHistory();

	function handleClick() {
		if (history.location.pathname !== "/") {
			history.push("/");
		} else {
			window.scrollTo(0, 0);
		}
	}

	return (
		<StyledHolidazeLogo>
			<svg
				onClick={handleClick}
				version="1.1"
				id="Layer_1"
				xmlns="http://www.w3.org/2000/svg"
				x="0"
				y="0"
				viewBox="0 0 74.1 29"
			>
				<g id="holidaze">
					<path
						className="st0"
						d="M0 28.8V14.6h3v5.8h6.1v-5.8h3v14.1h-3v-5.8H3v5.8H0zM18.5 29c-1.1 0-2-.2-2.8-.7-.8-.5-1.4-1.1-1.8-1.9-.4-.8-.6-1.8-.6-2.9 0-1.1.2-2.1.6-2.9.4-.8 1-1.5 1.8-1.9.8-.5 1.7-.7 2.8-.7 1.1 0 2 .2 2.8.7.8.5 1.4 1.1 1.8 1.9.4.8.6 1.8.6 2.9 0 1.1-.2 2-.6 2.9-.4.8-1 1.5-1.8 1.9-.8.5-1.8.7-2.8.7zm0-2.3c.5 0 .9-.1 1.2-.4.3-.3.6-.7.7-1.1.2-.5.3-1 .3-1.7s-.1-1.2-.3-1.7c-.2-.5-.4-.9-.7-1.1-.3-.3-.7-.4-1.2-.4s-.9.1-1.2.4c-.3.3-.6.7-.8 1.1-.2.5-.3 1-.3 1.7s.1 1.2.3 1.7c.2.5.4.9.8 1.1s.7.4 1.2.4zM27.8 14.6v14.1h-2.9V14.6h2.9zM30.4 16.8c-.4 0-.8-.1-1.1-.4-.3-.3-.5-.6-.5-1.1 0-.4.2-.8.5-1 .3-.3.7-.4 1.1-.4.4 0 .8.1 1.1.4s.5.6.5 1-.2.8-.5 1.1c-.2.3-.6.4-1.1.4zm-1.4 12V18.2h2.9v10.6H29zM37 29c-.8 0-1.5-.2-2.2-.6-.7-.4-1.2-1-1.5-1.8-.4-.8-.6-1.8-.6-3s.2-2.2.6-3c.4-.8.9-1.4 1.6-1.8.7-.4 1.4-.6 2.1-.6.6 0 1.1.1 1.5.3.4.2.7.4 1 .7l.6.9h.1v-5.3H43v14.1h-2.9v-1.7H40c-.1.3-.3.6-.6.9-.3.3-.6.5-1 .7-.4.1-.8.2-1.4.2zm.9-2.4c.5 0 .9-.1 1.2-.4.3-.3.6-.6.8-1.1s.3-1 .3-1.7c0-.6-.1-1.2-.3-1.6-.2-.5-.4-.8-.8-1.1-.3-.3-.7-.4-1.2-.4s-.9.1-1.2.4c-.3.3-.6.6-.8 1.1-.2.5-.3 1-.3 1.6 0 .6.1 1.2.3 1.6s.4.8.8 1.1c.3.4.7.5 1.2.5zM47.3 29c-.7 0-1.3-.1-1.8-.4-.5-.2-.9-.6-1.3-1.1-.3-.5-.5-1.1-.5-1.8 0-.6.1-1.1.3-1.5.2-.4.5-.7.9-1 .4-.2.8-.4 1.3-.6l1.5-.3c.6-.1 1.1-.1 1.5-.2.4-.1.7-.1.8-.3.2-.1.3-.3.3-.5 0-.4-.1-.8-.4-1-.3-.2-.7-.4-1.2-.4s-1 .1-1.3.3c-.3.2-.5.5-.6.9l-2.7-.2c.1-.6.4-1.2.8-1.7s.9-.8 1.6-1.1c.6-.3 1.4-.4 2.2-.4.6 0 1.2.1 1.7.2s1 .4 1.4.6c.4.3.8.7 1 1.1.2.5.4 1 .4 1.6v7.2h-2.8v-1.5h-.1c-.2.3-.4.6-.7.9-.3.3-.6.4-1 .6-.3.5-.8.6-1.3.6zm.8-2c.4 0 .8-.1 1.1-.3.3-.2.6-.4.8-.7.2-.3.3-.6.3-1v-1.1s-.2.1-.3.1c-.2 0-.3.1-.5.1s-.4.1-.6.1c-.2 0-.4.1-.5.1-.3.1-.6.1-.9.2-.3.1-.5.3-.6.4-.1.2-.2.4-.2.7 0 .4.1.7.4.9.2.3.6.5 1 .5zM68.9 29c-1.1 0-2-.2-2.8-.7-.8-.4-1.4-1.1-1.8-1.9-.4-.8-.6-1.8-.6-2.9 0-1.1.2-2 .6-2.9.4-.8 1-1.5 1.8-1.9.8-.5 1.7-.7 2.7-.7.7 0 1.4.1 2 .3.6.2 1.1.6 1.6 1s.8 1 1.1 1.7c.3.7.4 1.5.4 2.4v.8h-9v-1.8H71c0-.4-.1-.8-.3-1.1-.2-.3-.4-.6-.8-.8-.3-.2-.7-.3-1.1-.3-.4 0-.8.1-1.2.3-.3.2-.6.5-.8.8-.2.3-.3.7-.3 1.1v1.7c0 .5.1 1 .3 1.4.2.4.5.7.8.9.4.2.8.3 1.3.3.3 0 .6 0 .9-.1.3-.1.5-.2.7-.4.2-.2.3-.4.4-.7l2.7.2c-.1.7-.4 1.2-.8 1.7s-1 .9-1.6 1.1c-.7.4-1.5.5-2.3.5z"
					/>
				</g>
				<path
					id="z01"
					className="st0"
					d="M58.2 26.4l4.9-6.3v-1.9h-8.6v2.3h5v.1L54.3 27v1.8h9v-2.4h-5.1z"
				/>
				<path
					id="z02"
					className="st0"
					d="M58.2 26.4l4.9-6.3v-1.9h-8.6v2.3h5v.1L54.3 27v1.8h9v-2.4h-5.1z"
				/>
				<path
					id="z03"
					className="st0"
					d="M58.2 26.4l4.9-6.3v-1.9h-8.6v2.3h5v.1L54.3 27v1.8h9v-2.4h-5.1z"
				/>
			</svg>
		</StyledHolidazeLogo>
	);
}
