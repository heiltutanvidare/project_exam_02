import styled from "styled-components";

export const StyledCarousel = styled.div`
	display: flex;
	gap: 1rem;
	overflow-x: scroll;
	min-height: 8.75rem;
`;

export const StyledCarouselContainer = styled.div`
	display: grid;
	grid-template-columns: min-content auto;
	grid-gap: 1rem;
	margin-top: var(--space-md);
	margin-bottom: var(--space-lg);
`;
