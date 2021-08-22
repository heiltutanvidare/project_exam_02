import styled from "styled-components";

export const StyledMenuOverlay = styled.div`
	position: fixed;
	top: 0;
	left: ${(props) => (props.open ? "0" : "101%")};
	opacity: ${(props) => (props.open ? "1" : "0")};
	right: 0;
	bottom: 0;
	overflow-y: scroll;
	color: var(--clr-drk-50);
	z-index: 3000;
	background-color: rgba(0, 0, 0, 0.75);
	transition: left var(--transition-medium), opacity var(--transition-medium);

	.inner {
		border-radius: var(--br-lg);
		padding-top: var(--space-xsm);
		padding-bottom: var(--space-md);
		background-color: var(--clr-primary-900);
		margin-left: auto;
		width: 85%;
	}

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
			cursor: pointer;

			img {
				border: 1px solid var(--clr-drk-50);
				padding: 0.5rem;
				border-radius: 50%;
				fill: red;
				margin-left: 0.5rem;
				transition: all var(--transition-fast);
			}

			&:hover {
				img {
					margin-left: 1rem;
					transform: rotate(22.5deg);
				}
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

			span {
				display: block;
			}
		}

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
	}
`;
