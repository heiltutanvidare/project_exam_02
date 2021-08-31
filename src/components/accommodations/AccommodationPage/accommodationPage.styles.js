import styled from "styled-components";

export const StyledAccommodationPage = styled.main`
	margin-top: 5rem;

	.place {
		&__image {
			margin-bottom: var(--space-xxxsm);
		}

		&__flex {
			display: flex;
			justify-content: space-between;
		}

		&__type,
		&__distance {
			font-size: 0.875rem;
			color: var(--clr-drk-700);
		}

		&__distance span {
			font-weight: 700;
		}

		&__title {
			margin: var(--space-xxxsm) 0;
			font-weight: bold;
			font-size: 1.125rem;
			line-height: 1.625rem;
		}

		&__room-details {
			color: var(--clr-drk-450);
			display: flex;
			margin-bottom: var(--space-xxxsm);
			font-size: 0.875rem;
		}

		&__bedrooms {
			margin-right: 0.5rem;
			padding-right: 0.5rem;
			border-right: 1px solid var(--clr-drk-300);
		}

		&__bedrooms span,
		&__bathrooms span {
			font-weight: 700;
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
	}
`;
