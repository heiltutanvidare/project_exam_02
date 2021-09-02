import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledLoginPage = styled.main`
	margin-top: 4rem;
	.login {
		&__grid {
			display: grid;

			@media screen and (${breakpoints.lg}) {
				grid-template-columns: repeat(2, 1fr);
				padding-bottom: 0;

				&--left {
					img {
						height: 100%;
						object-fit: cover;
						max-height: unset;
						margin-bottom: 0;
					}
				}

				&--right {
					display: grid;
					place-items: center;

					> * {
						max-width: 48ch;
					}
				}
			}
		}

		&__image {
			max-height: 280px;
			object-fit: cover;
			width: 100%;
			object-position: center center;
			margin-bottom: var(--space-xsm);

			@media screen and (${breakpoints.md}) {
				max-height: 380px;
			}
		}

		&__title {
			font-size: 1.3rem;
		}

		&__text {
			color: var(--clr-drk-700);
		}
	}
`;
