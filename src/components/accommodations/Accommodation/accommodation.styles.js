import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledAccommodation = styled(Link)`
	display: grid;
	grid-template-rows: 200px repeat(4, auto);
	grid-gap: 0.5rem;
	text-decoration: none;
	color: inherit;

	.accommodation__image {
		border-radius: var(--br-sm);
		height: 100%;
		width: 100%;
		object-fit: cover;
		object-position: center center;
	}
	.accommodation__type {
		color: var(--clr-drk-300);
		font-size: 0.875rem;
	}
	.accommodation__description {
		font-size: 1.125rem;
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
`;
