import styled from "styled-components";

export const StyledMessage = styled.div`
	margin-top: var(--space-xxsm);
	padding: var(--space-xxsm);
	color: var(--clr-white);
	background-color: ${(props) =>
		props.bg ? props.bg : "var(--clr-drk-900)"};
	border-radius: var(--br-sm);
`;
