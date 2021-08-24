import styled from "styled-components";

export const StyledMessageList = styled.div`
	.message {
		border-bottom: 1px solid var(--clr-drk-200);
		padding: var(--space-xxsm) 0;

		:first-of-type {
			margin-top: var(--space-xxsm);
			border-top: 1px solid var(--clr-drk-200);
		}

		&__grid {
			display: grid;
			grid-template-columns: auto 1fr;
			align-items: baseline;
			grid-gap: 0.5rem 0.75rem;
		}

		&__label {
			color: var(--clr-drk-500);
			font-size: 0.75rem;
			/* margin-right: 0.75rem; */

			&--nonGrid {
				margin-top: 1.25rem;
				margin-bottom: 0.5rem;
			}
		}

		&__value {
			font-size: 0.875rem;
		}
	}
`;
