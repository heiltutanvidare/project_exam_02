import styled from "styled-components";

export const StyledHeader = styled.header`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	border-bottom: 1px solid
		${(props) => (props.filled ? "var(--clr-drk-50)" : "transparent")};
	background: ${(props) => (props.filled ? "var(--clr-drk-900-08)" : "none")};
	transition: all 0.5s linear;

	&.filled {
		background: var(--clr-drk-900-08);
		border-color: var(--clr-drk-50);
	}

	.inner {
		padding-top: 1.125rem;
		padding-bottom: 1.125rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
