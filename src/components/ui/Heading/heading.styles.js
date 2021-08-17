import styled from "styled-components";

export const StyledHeading = styled.h1`
	font-family: "Viaoda Libre", cursive;
	font-size: ${(props) => (props.heroTitle ? "3rem" : "2.375rem")};
	line-height: ${(props) => (props.heroTitle ? "3.125rem" : "2.875rem")};
	text-align: ${(props) => (props.align ? props.align : "left")};
	font-weight: normal;
	font-variant-ligatures: common-ligatures;
	margin-bottom: var(--space-xxsm);
`;
