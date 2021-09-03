import styled from "styled-components";
import { Link } from "react-router-dom";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledAccommodation = styled(Link)`
	display: grid;
	grid-template-rows: 200px repeat(4, auto);
	grid-gap: 0.5rem;
	text-decoration: none;
	color: inherit;

	.accommodation__image {
		height: 100%;

		img {
			border-radius: var(--br-sm);
			height: 100%;
			width: 100%;
			object-fit: cover;
			object-position: center center;
		}
	}
	.accommodation__type {
		color: var(--clr-drk-300);
		font-size: 0.875rem;
	}
	.accommodation__title {
		font-size: 1.125rem;
	}

	.accommodation__amenities {
		display: none;
	}

	.accommodation__price {
		font-size: 1.125rem;

		span {
			font-weight: 700;
		}
	}
	.accommodation__price--total {
		font-size: 0.875rem;
		color: var(--clr-drk-300);
	}

	@media screen and (${breakpoints.lg}) {
		background-color: var(--clr-white);
		grid-template-columns: 1fr 2fr;
		grid-template-rows: 1fr;
		border-radius: var(--br-md);
		transition: box-shadow 0.2s linear;

		&:hover {
			box-shadow: var(--box-shadow-sm);
		}

		.accommodation__image {
			height: 100%;
		}

		.content {
			padding: var(--space-xxxsm);
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		.accommodation__title {
			border-bottom: 1px solid var(--clr-drk-100);
			margin: 0.5rem 0;
		}

		.accommodation__amenities {
			margin: 0.75rem 0;
			display: flex;
			flex-wrap: wrap;
			gap: 1em;

			small {
				color: var(--clr-drk-500);
				font-size: 0.875rem;
				line-height: 1;
			}
		}
	}
`;
