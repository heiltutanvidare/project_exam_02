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
						max-height: 9rem;
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
			padding: 2rem 2rem 1rem 1.5rem;
			@media screen and (${breakpoints.md}) {
				place-items: center;
				padding: 0;
			}
		}

		&__image {
			max-height: 4rem;
		}

		&__title {
			font-size: 1.3rem;
		}

		&__text {
			color: var(--clr-drk-700);
		}
	}
`;
