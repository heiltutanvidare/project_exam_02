import styled from "styled-components";

export const StyledSearchResults = styled.section`
	margin-top: var(--space-sm);
	display: grid;
	grid-gap: 2rem;

	h2,
	h3 {
		font-size: 1.25rem;
		color: var(--clr-drk-700);
		margin-bottom: -1rem;
		line-height: 1.4;
	}

	h3 {
		font-size: 1rem;
	}
`;
