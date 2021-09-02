import styled from "styled-components";

export const StyledMessage = styled.div`
	margin-top: var(--space-xxsm);
	padding: var(--space-xxsm);
	color: var(--clr-white);
	background-color: ${(props) =>
		props.bg ? props.bg : "var(--clr-drk-900)"};
	border-radius: var(--br-sm);
`;

export const StyledFullPageContainer = styled.div`
	position: absolute;
	min-height: 100vh;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	background: #20212280;
	z-index: 1000000;

	.inner {
		display: grid;
		place-content: center;
		height: 100vh;
	}
`;
