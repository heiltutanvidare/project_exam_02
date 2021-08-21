import styled from "styled-components";

export const StyledMenuOverlay = styled.div`
	position: fixed;
	top: 0;
	width: 85%;
	right: 0;
	min-height: 100vh;
	margin-left: auto;
	background-color: var(--clr-primary-900);
	color: var(--clr-drk-50);
	z-index: 3000;
`;
