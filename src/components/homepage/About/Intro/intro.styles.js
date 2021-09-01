import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledIntro = styled.div`
	margin-bottom: var(--space-lg);
	display: grid;
	grid-gap: 1.5rem;
	grid-template-columns: repeat(3, 1fr);
	.intro {
		&__text {
			grid-column: 1 / -1;
		}
		&__images {
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}

			&--main {
				grid-column: 1 / -2;
			}
			&--secondary {
				grid-column: 2 / -1;
				margin-top: -5rem;
				box-shadow: var(--box-shadow-sm);
			}
		}
	}

	@media screen and (${breakpoints.md}) {
		.intro__text {
			grid-column: 1 / -2;
		}
	}

	@media screen and (${breakpoints.lg}) {
		grid-template-columns: repeat(6, 1fr);
		grid-template-rows: repeat(5, 1fr);

		.intro {
			&__text {
				grid-column: 4 / -1;
				grid-row: 1 / 4;
				align-self: center;
				padding: 3vmin;
			}
			&__images {
				&--main {
					grid-column: 1 / 4;
					grid-row: 1 / 5;
				}
				&--secondary {
					grid-row: -3 / -1;
					grid-column: 3 / -1;
					margin-top: 0;
				}
			}
		}
	}
`;
