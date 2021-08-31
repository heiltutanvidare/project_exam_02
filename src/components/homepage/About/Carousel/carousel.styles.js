import styled from "styled-components";

export const StyledCarousel = styled.div`
	display: flex;
	gap: 1rem;
	overflow-x: scroll;
	scroll-snap-type: x mandatory;
	min-height: 8.75rem;

	> * {
		scroll-snap-align: start;
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
`;
