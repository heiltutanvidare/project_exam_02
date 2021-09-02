import styled from "styled-components";

export const StyledMenuNav = styled.nav`
	ul {
		list-style: none;
		padding: 0;

		li {
			margin: 1.5rem 0;
			transition: opacity 0.125s linear;

			a {
				color: var(--clr-drk-50);
				letter-spacing: 0.25rem;
				text-decoration: none;
				text-transform: uppercase;
				padding: 0.75rem 0;
				border-bottom: 0.5px solid var(--clr-drk-500);
			}

			&:hover {
				opacity: 0.5;
			}
		}
	}
`;
