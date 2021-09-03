import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledAccommodationPage = styled.main`
	margin-top: 5rem;
	position: relative;

	.place {
		&__top__grid {
			display: grid;
		}

		&__image {
			margin-bottom: var(--space-xxxsm);
		}

		&__images__desktop {
			display: none;
		}

		&__details {
			display: grid;
			grid-template-columns: repeat(2, max-content);
			grid-gap: 0.125rem 1rem;
			margin-bottom: var(--space-xxxsm);
		}

		&__type,
		&__distance,
		&__bedrooms,
		&__bathrooms {
			font-size: 0.875rem;
			color: var(--clr-drk-700);
		}

		&__type span,
		&__distance span,
		&__bedrooms span,
		&__bathrooms span {
			font-weight: 700;
		}

		&__title {
			margin: var(--space-xxxsm) 0;
			font-weight: bold;
			font-size: 1.125rem;
			line-height: 1.625rem;
		}

		&__description {
			margin-bottom: var(--space-xxsm);
		}

		&__amenities-title {
			font-size: 1.125rem;
			line-height: 1;
		}

		&__amenities {
			list-style: none;
			padding: 0;
		}

		&__amenity {
			display: flex;
			align-items: center;
			margin-bottom: 3px;

			img {
				height: 1rem;
				margin-right: 0.5rem;
			}
		}

		&__priceBox--mobile {
			position: sticky;
			bottom: 0;
			left: 0;
			right: 0;
		}

		&__priceBox--desktop {
			display: none;
		}

		@media screen and (${breakpoints.md}) {
			&__images__mobile {
				display: none;
			}
			&__images__desktop {
				display: grid;
			}
			&__title {
				grid-row: 1;
				font-size: 1.75rem;
				line-height: 1.2;
			}

			&__details {
				grid-template-columns: repeat(4, max-content);
				grid-gap: 0.125rem 1.5rem;
				border-top: 1px solid var(--clr-drk-100);
				border-bottom: 1px solid var(--clr-drk-100);
				padding: 0.5rem 0;
			}

			&__bottom__grid {
				display: grid;
				grid-template-columns: repeat(12, 1fr);
				grid-gap: 1rem;
				margin-bottom: var(--space-md);
			}

			&__description,
			&__amenities-title,
			&__amenities {
				grid-column: 2 / 11;
			}

			&__amenities {
				display: grid;
				grid-template-columns: repeat(6, 1fr);
				grid-gap: 0.5rem;
				align-items: start;
			}

			&__amenity {
				display: grid;
				place-items: center;

				&__image {
					border: 2px solid var(--clr-drk-800);
					border-radius: 50%;
					padding: 0.65rem;
					width: 3rem;
					height: 3rem;
					margin-right: 0;
					margin-bottom: 0.45rem;
					display: grid;
					place-items: center;
				}

				img {
					margin: 0;
					width: 100%;
					height: 100%;
				}

				p {
					font-size: 0.875rem;
					text-align: center;
				}
			}
		}

		@media screen and (${breakpoints.lg}) {
			&__bottom__grid {
				grid-template-columns: repeat(12, 1fr);
			}

			&__description,
			&__amenities-title,
			&__amenities {
				grid-column: 2 / 8;
			}

			&__priceBox--mobile {
				display: none;
			}

			&__priceBox--desktop {
				grid-column: 9 / -1;
				grid-row: 1 / -1;
				display: grid;
				justify-items: stretch;
				align-items: center;
			}
		}
	}

	.booking-container {
		position: absolute;
		top: -1.2rem;
		left: 0;
		right: 0;
		background-color: var(--clr-primary-500);
		padding-bottom: 2rem;
		box-shadow: var(--box-shadow-lg);
	}
	.pricebox-container {
		margin: 0 0 2rem 0;
		position: sticky;
		top: 3.8rem;
	}

	.booking__heading,
	.booking__title {
		color: var(--clr-drk-50);
	}

	.booking__title {
		margin-bottom: var(--space-xxsm);
	}
`;
