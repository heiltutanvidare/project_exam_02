import styled from "styled-components";

export const StyledHeader = styled.header`
	/* position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0; */
	border-bottom: 1px solid var(--clr-drk-50);
	background: var(--clr-drk-900);

	.inner {
		padding-top: 1.25rem;
		padding-bottom: 1.25rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
