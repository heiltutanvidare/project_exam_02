import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledCarousel = styled.div`
	display: flex;
	gap: 1rem;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
	min-height: 8.75rem;

	> * {
		scroll-snap-align: start;
	}
	@media screen and (${breakpoints.lg}) {
		display: grid;
		grid-template-columns: repeat(3, 1fr);

		> * {
			height: 25rem;
			width: 15rem;
		}
	}
`;

export const StyledCarouselContainer = styled.div`
	display: grid;
	grid-template-columns: min-content auto;
	grid-gap: 1rem;
	margin-top: var(--space-sm);
	margin-bottom: var(--space-lg);
	width: 92.5%;
	margin-left: auto;

	@media screen and (${breakpoints.lg}) {
		justify-content: center;
		margin: var(--space-sm) auto var(--space-lg) auto;
	}
`;
