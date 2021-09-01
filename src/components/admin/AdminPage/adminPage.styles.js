import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledAdminPage = styled.section`
	margin: 4rem 0;

	.nav {
		margin-bottom: var(--space-xxsm);
		width: 100%;

		@media screen and (${breakpoints.md}) {
			margin-top: var(--space-sm);
			margin-bottom: var(--space-xsm);
		}

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

		@media screen and (${breakpoints.md}) {
			text-align: center;
			margin: 0 auto;

			button {
				margin: 1rem auto;
			}
		}
	}
`;
