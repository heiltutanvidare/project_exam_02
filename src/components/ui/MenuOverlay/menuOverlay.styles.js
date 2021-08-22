import styled from "styled-components";

export const StyledMenuOverlay = styled.div`
	padding-top: var(--space-xsm);
	position: fixed;
	top: 0;
	width: 85%;
	right: 0;
	bottom: 0;
	margin-left: auto;
	overflow-y: scroll;
	background-color: var(--clr-primary-900);
	color: var(--clr-drk-50);
	z-index: 3000;

	.menu {
		&__close__button {
			margin-left: auto;
			background: none;
			color: var(--clr-drk-50);
			display: flex;
			align-items: center;
			border: none;
			outline: none;
			border-radius: none;
			text-transform: uppercase;
			font-size: 0.625rem;
			letter-spacing: 0.25em;

			img {
				border: 1px solid var(--clr-drk-50);
				padding: 0.5rem;
				border-radius: 50%;
				fill: red;
			}
		}

		&__title {
			margin-top: var(--space-xsm);
			font-family: Viaoda Libre;
			font-style: normal;
			font-weight: normal;
			font-size: 1.375rem;
			line-height: 1.8rem;

			span {
				display: block;
			}
		}

		&__text {
			font-size: 0.875rem;
			margin: var(--space-xxsm) 0;
		}

		&__address {
			font-style: normal;
			font-weight: 300;
			font-size: 0.75rem;
		}

		&__links__container {
			margin: 2.5rem 0;
			display: grid;
			grid-gap: 1rem;
		}

		&__link {
			color: inherit;
			text-decoration: none;
			display: flex;
			align-items: center;

			svg {
				display: block;
				width: 1.5rem;
				outline: 1px solid pink;
				padding: 0.25rem;
				background: white;
				border-radius: 50%;

				path {
					fill: var(--clr-drk-900);
				}
			}
		}
	}
`;
