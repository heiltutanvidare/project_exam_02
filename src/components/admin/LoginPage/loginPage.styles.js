import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledLoginPage = styled.main`
	margin-top: 4rem;
	padding-bottom: 4rem;
	position: relative;

	@media screen and (${breakpoints.md}) {
		margin-top: 7rem;
		padding-bottom: 7rem;
	}
	@media screen and (${breakpoints.lg}) {
		margin-top: 11rem;
		padding-bottom: 11rem;
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
						position: static;
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
			max-height: 13rem;
			border-radius: 50%;
			position: absolute;
			bottom: -1rem;
			z-index: -1;
			right: 10%;

			@media screen and (${breakpoints.sm}) {
				max-height: 15rem;
				bottom: -5rem;
			}

			@media screen and (${breakpoints.md}) {
				max-height: 22rem;
				bottom: -15rem;
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
