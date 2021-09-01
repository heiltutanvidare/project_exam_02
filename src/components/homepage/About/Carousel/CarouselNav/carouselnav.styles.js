import styled from "styled-components";
import breakpoints from "../../../../../global/styles/breakpoints";

export const StyledCarouselNav = styled.nav`
	svg {
		width: 1.25rem;
		fill: var(--clr-drk-200);
		transition: stroke var(--transition-fast);
		transform-origin: bottom center;
		animation: swipe 1s ease-in-out alternate infinite;

		@keyframes swipe {
			from {
				transform: rotate(-11deg);
			}
			to {
				transform: rotate(11deg);
			}
		}
	}

	@media screen and (${breakpoints.lg}) {
		display: none;
	}
`;
