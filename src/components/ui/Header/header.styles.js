import styled from "styled-components";

export const StyledHeader = styled.header`
	position: fixed;
	z-index: 1000;
	top: 0;
	left: 0;
	right: 0;
	border-bottom: 1px solid
		${(props) => (props.filled ? "var(--clr-drk-50)" : "transparent")};
	background: ${(props) =>
		props.filled ? "var(--clr-primary-500-transp)" : "none"};
	transition: all 0.5s linear;

	&.filled {
		background: var(--clr-primary-500-transp);
		border-color: var(--clr-drk-50);
	}

	.inner {
		padding-top: 0.8rem;
		padding-bottom: 0.8rem;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
`;
