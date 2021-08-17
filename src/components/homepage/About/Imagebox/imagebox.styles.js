import styled from "styled-components";

export const StyledImagebox = styled.div`
	margin-top: var(--space-xsm);
	margin-bottom: var(--space-xsm);
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(12, 1fr);

	.main {
		grid-column: 1 / 4;
		grid-row: 1 / 10;

		img {
			height: auto;
			object-fit: cover;
		}
	}

	.secondary {
		z-index: 2;
		grid-column: 2 / -1;
		grid-row: 9 / -1;

		img {
			height: auto;
			object-fit: cover;
		}
	}
`;
