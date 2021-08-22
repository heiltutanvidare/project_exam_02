import styled from "styled-components";

export const StyledDecorativeDivider = styled.div`
	background-color: ${(props) =>
		props.bg ? props.bg : "var(--clr-drk-900)"};
	height: 1px;
	width: ${(props) => (props.width ? props.width : "100%")};
	margin: var(--space-xxsm) 0;
`;
