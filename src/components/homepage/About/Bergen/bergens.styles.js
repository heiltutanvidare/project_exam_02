import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledBergen = styled.div`
	display: grid;

	@media screen and (${breakpoints.lg}) {
		margin: var(--space-lg) 0;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
		align-items: flex-end;

		.left {
			padding: 0 var(--space-xsm) var(--space-xxsm) var(--space-xsm);
		}
	}

	@media screen and (${breakpoints.xlg}) {
		.left {
			padding: 0 3vw var(--space-xxsm) 3vw;
		}
	}
`;
