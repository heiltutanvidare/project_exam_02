import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledAccommodationImages = styled.div`
	position: relative;

	.image {
		margin-bottom: var(--space-xxxsm);
		object-fit: cover;
		height: 250px;
		width: 100%;

		@media screen and (${breakpoints.sm}) {
			height: 450px;
		}

		&__navigation {
			position: absolute;
			top: 0;
			bottom: 0;
			left: 0;
			right: 0;
			display: flex;
			justify-content: space-between;

			&__prev,
			&__next {
				display: grid;
				place-content: center;
				padding: 1em;

				svg {
					padding: 0.5em;
					background-color: var(--clr-drk-900-08);
					border-radius: 50%;
					fill: white;
					width: 2rem;
					height: 2rem;
				}
			}
		}
		&__numbering {
			background-color: var(--clr-drk-900-08);
			color: var(--clr-drk-50);
			display: inline-block;
			padding: 0.2rem 0.75rem;
			position: absolute;
			bottom: 0;
			right: 0;
		}
	}

	.image__grid {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-gap: 1rem;
		margin: 0 auto var(--space-xsm) auto;
		max-width: var(--max-width);
		min-height: 450px;

		&__image-container {
			height: 100%;
		}

		&__secondary__images {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 1rem;
			height: 100%;
			object-fit: cover;
		}

		&__image {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}
`;
