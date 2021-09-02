import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledHeaderNav = styled.nav`
	ul {
		display: none;
		list-style: none;
		padding: 0;
		margin: 0;
	}

	@media screen and (${breakpoints.md}) {
		ul {
			display: flex;
			gap: 1.5rem;
			align-items: center;
			margin-right: 3rem;

			li {
				margin: 0;
				opacity: 0.75;
				transition: opacity 0.125s linear;

				a {
					color: var(--clr-drk-50);
					text-decoration: none;
					padding: 0.75rem 0;
				}

				button {
					margin: 0;
				}

				&:hover {
					opacity: 1;
				}
			}
		}
		.active {
			opacity: 1;
		}
	}
`;
