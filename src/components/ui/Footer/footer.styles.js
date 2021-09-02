import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledFooter = styled.footer`
	background-color: var(--clr-drk-900);
	color: var(--clr-drk-50);
	margin-top: auto;
	padding: var(--space-sm) 0 var(--space-xsm) 0;
	overflow: hidden;

	.footer {
		&__address {
			font-style: normal;
			font-weight: 300;
			font-size: 0.75rem;
		}

		&__links__container {
			margin: var(--space-xxsm) 0;
			display: grid;
			grid-gap: 0.5rem;
		}

		&__link {
			color: inherit;
			text-decoration: none;
			display: flex;
			align-items: center;
			font-size: 0.75rem;

			svg {
				display: block;
				width: 1.5rem;
				padding: 5px;
				background: white;
				border-radius: 50%;
				margin-right: 0.75rem;

				path {
					fill: var(--clr-drk-900);
				}
			}
		}

		&__opening-hours {
			font-weight: 300;
		}

		&__logo-container--01,
		&__logo-container--02 {
			opacity: 0.025;
			pointer-events: none;

			div {
				max-height: unset;
				margin-bottom: 0;
			}
		}

		&__logo-container--01 {
			margin-top: -20rem;

			svg {
				transform: scale(1.5) translateX(-20%) translateY(0);
			}
		}

		&__logo-container--02 {
			svg {
				transform: scale(1.5) translateX(60%) translateY(-1.25rem);
			}
		}

		&__acknowledgement {
			margin-top: var(--space-md);
			max-width: 72ch;
			p {
				font-size: 0.75rem;
				color: var(--clr-drk-600);

				a {
					color: inherit;
					font-weight: 700;
					cursor: pointer;
					text-decoration: none;

					:hover {
						color: var(--clr-drk-100);
					}
				}

				span {
					font-weight: 700;
				}
			}
			@media screen and (${breakpoints.md}) {
				margin-top: var(--space-xxxsm);
			}
		}

		@media screen and (${breakpoints.sm}) {
			.footer__logo-container--02 {
				display: none;
			}
		}

		@media screen and (${breakpoints.md}) {
			display: grid;
			grid-gap: 3rem;
			grid-template-columns: repeat(3, 1fr);

			.footer__part {
				&--nav {
					width: max-content;
					ul,
					li:first-of-type {
						margin-top: 0;
					}
				}
			}

			.footer__logo {
				grid-column: -2 / -1;
			}

			.footer__logo-container--01 {
				margin-top: 0;

				svg {
					transform: scale(1) translateX(0) translateY(0);
				}
			}
		}

		@media screen and (${breakpoints.lg}) {
			grid-template-columns: repeat(5, 1fr);

			.footer__logo {
				grid-column: 3 / -1;
			}
		}
	}
`;
