import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledAdminPage = styled.section`
	margin: 4rem 0;

	.nav {
		margin-bottom: var(--space-xxsm);
		width: 100%;

		&__list {
			display: flex;
			justify-content: center;
			align-items: flex-end;
			list-style: none;
			padding: 0;
			gap: 2.25rem;
		}

		&__list-item {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: var(--clr-drk-300);
			transition: all var(--transition-fast);

			svg {
				max-height: 1rem;
			}

			p {
				font-size: 0.75rem;
			}

			:hover {
				color: var(--clr-drk-900);
			}
		}

		.active {
			color: var(--clr-drk-900);
		}
	}

	.hidden {
		display: none;
	}

	.visible {
		display: block;
	}

	.admin__section__intro {
		max-width: 62ch;
	}

	@media screen and (${breakpoints.md}) {
		margin: 4.4rem 0;

		.nav {
			margin-top: var(--space-xsm);
			margin-bottom: var(--space-xsm);

			&__list-item {
				svg {
					max-height: 1.5rem;
					margin-bottom: 0.35em;
				}

				p {
					font-size: 0.8rem;
				}
			}
		}
		.admin__section__intro {
			text-align: center;
			margin: 0 auto;

			button {
				margin: 1.5rem auto;
			}
		}
	}

	@media screen and (${breakpoints.lg}) {
		.nav {
			margin-top: var(--space-sm);
			margin-bottom: var(--space-xsm);

			&__list-item {
				svg {
					max-height: 1.75rem;
					margin-bottom: 0.25em;
				}

				p {
					font-size: 0.85rem;
				}
			}
		}
	}
`;
