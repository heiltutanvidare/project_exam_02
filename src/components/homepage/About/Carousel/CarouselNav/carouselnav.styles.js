import styled from "styled-components";

export const StyledCarouselNav = styled.nav`
	display: flex;
	flex-direction: column;

	svg {
		width: 3rem;
		height: 3rem;
		stroke: var(--clr-drk-600);
		cursor: pointer;
		transition: stroke var(--transition-fast);

		&:hover {
			stroke: var(--clr-drk-900);
		}
	}
`;
