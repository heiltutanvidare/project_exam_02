import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledAdminHero = styled.div`
	background: linear-gradient(
		to right,
		var(--clr-primary-300),
		var(--clr-primary-900)
	);
	background-size: 250%;
	background-position: left center;
	animation: moveBG 4s ease-in-out alternate infinite;
	color: var(--clr-drk-50);
	padding: 3rem 0;
	margin-bottom: var(--space-xxsm);

	@keyframes moveBG {
		from {
			background-position: left center;
		}
		to {
			background-position: right center;
		}
	}

	h1 {
		font-size: 1.3125rem;
		line-height: 1;
		margin-bottom: var(--space-xxxsm);
	}

	p {
		font-size: 1rem;
	}

	@media screen and (${breakpoints.md}) {
		padding: 4.5rem 0;
		h1 {
			font-size: 2.25rem;
		}
	}

	p {
		font-size: 1.025rem;
	}

	@media screen and (${breakpoints.lg}) {
		padding: 6rem 0;
		h1 {
			font-size: 3.25rem;
		}
	}

	p {
		font-size: 1.125rem;
	}
`;
