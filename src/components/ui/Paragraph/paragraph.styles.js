import styled from "styled-components";

export const StyledParagraph = styled.p`
	text-align: ${(props) => (props.align ? props.align : "left")};
	margin-left: ${(props) => (props.align === "center" ? "auto" : "unset")};
	margin-right: ${(props) => (props.align === "center" ? "auto" : "unset")};
	max-width: ${(props) => (props.align === "center" ? "580px" : "unset")};
`;
