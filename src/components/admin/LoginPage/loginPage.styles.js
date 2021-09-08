import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledLoginPage = styled.main`
	margin-top: 4rem;
	margin-bottom: 4rem;

	@media screen and (${breakpoints.md}) {
		margin-top: 7rem;
		margin-bottom: 7rem;
	}
	@media screen and (${breakpoints.lg}) {
		margin-top: 11rem;
		margin-bottom: 11rem;
		max-width: 960px;
		margin-left: auto;
		margin-right: auto;
	}

	.login {
		&__grid {
			display: grid;

			@media screen and (${breakpoints.lg}) {
				grid-template-columns: repeat(2, 1fr);
				padding-bottom: 0;

				&--left {
					img {
						max-height: 20rem;
					}
				}

				&--right {
					> * {
						max-width: 48ch;
					}
				}
			}
		}

		&__image-container {
			height: 100%;
			display: grid;
			padding: 2rem 0 1rem 0;
			@media screen and (${breakpoints.lg}) {
				place-items: center;
			}
		}

		&__image {
			max-height: 6rem;
			border-radius: 50%;
		}

		&__title {
			font-size: 1.3rem;
		}

		&__text {
			color: var(--clr-drk-700);
		}
	}
`;
