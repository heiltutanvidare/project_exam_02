import styled from "styled-components";

export const StyledPretitle = styled.p`
	font-weight: bold;
	font-size: 0.75rem;
	text-align: ${(props) => (props.align ? props.align : "left")};
	letter-spacing: 0.5em;
	text-transform: uppercase;
	margin-bottom: var(--space-xsm);
	color: ${(props) => (props.color ? props.color : "var(--clr-drk-400)")};
`;
