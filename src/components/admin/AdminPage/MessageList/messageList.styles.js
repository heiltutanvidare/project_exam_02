import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledMessageList = styled.div`
	max-width: 960px;
	margin-left: auto;
	margin-right: auto;

	.message {
		border-bottom: 1px solid var(--clr-drk-200);
		padding: var(--space-xxsm) 0;

		:first-of-type {
			margin-top: var(--space-xxsm);
			border-top: 1px solid var(--clr-drk-200);
		}

		&__grid {
			&--col01 {
				display: grid;
				grid-gap: 0.25rem 0.5rem;
			}

			&__item {
				display: grid;
				grid-template-columns: auto 1fr;
				align-items: baseline;
				grid-gap: 0.5rem 0.75rem;

				&--span-all {
					margin-top: 1rem;
					grid-template-columns: 1fr;
				}
			}
		}

		&__label {
			color: var(--clr-drk-500);
			font-size: 0.75rem;
		}

		&__value {
			font-size: 0.875rem;
		}
	}

	@media screen and (${breakpoints.md}) {
		.message {
			&__grid {
				display: grid;
				grid-template-columns: 2fr 3fr;
				grid-gap: 1rem;

				&--col01 {
					display: grid;
					grid-template-columns: 1fr 1fr;
					grid-row-gap: 0.5rem;

					align-items: start;
					margin-bottom: auto;
				}

				&__item {
					display: block;

					&--span-all {
						margin-top: 0;
					}
				}
			}
		}
	}
`;
