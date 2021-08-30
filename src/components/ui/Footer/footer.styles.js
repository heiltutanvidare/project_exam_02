import styled from "styled-components";

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
				transform: scale(7) translateX(30%) translateY(40%);
			}
		}

		&__logo-container--02 {
			svg {
				transform: scale(7) translateX(48%) translateY(36%);
			}
		}

		&__acknowledgement {
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
		}
	}
`;
