import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledLoginPage = styled.main`
	margin-top: 4rem;
	@media screen and (${breakpoints.lg}) {
		margin-top: 15vw;
		max-width: 960px;
	}

	.login {
		&__grid {
			display: grid;

			@media screen and (${breakpoints.lg}) {
				grid-template-columns: repeat(2, 1fr);
				padding-bottom: 0;

				&--left {
					img {
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

		&__image-container {
			height: 100%;
			display: grid;
			place-items: center;
			max-height: 280px;
			padding: 3rem;
			@media screen and (${breakpoints.md}) {
				max-height: 380px;
			}
		}

		&__image {
			max-height: 6rem;
		}

		&__title {
			font-size: 1.3rem;
		}

		&__text {
			color: var(--clr-drk-700);
		}
	}
`;
