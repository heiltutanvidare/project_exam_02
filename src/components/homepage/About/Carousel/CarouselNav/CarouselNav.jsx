import { StyledCarouselNav } from "./carouselnav.styles";

export default function CarouselNav() {
	return (
		<StyledCarouselNav>
			<svg fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M25.4583 17.625L31.3333 23.5M31.3333 23.5L25.4583 29.375M31.3333 23.5L15.6667 23.5M41.125 23.5C41.125 33.234 33.234 41.125 23.5 41.125C13.766 41.125 5.875 33.234 5.875 23.5C5.875 13.766 13.766 5.875 23.5 5.875C33.234 5.875 41.125 13.766 41.125 23.5Z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
			<svg fill="none" xmlns="http://www.w3.org/2000/svg">
				<path
					d="M21.5417 29.375L15.6667 23.5M15.6667 23.5L21.5417 17.625M15.6667 23.5L31.3333 23.5M5.875 23.5C5.875 13.766 13.766 5.875 23.5 5.875C33.234 5.875 41.125 13.766 41.125 23.5C41.125 33.234 33.234 41.125 23.5 41.125C13.766 41.125 5.875 33.234 5.875 23.5Z"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
			</svg>
		</StyledCarouselNav>
	);
}
