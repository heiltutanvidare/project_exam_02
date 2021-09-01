import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledHeading = styled.h1`
	font-family: "Viaoda Libre", cursive;
	font-size: ${(props) => (props.heroTitle ? "3rem" : "2.375rem")};
	line-height: ${(props) => (props.heroTitle ? "3.5rem" : "2.875rem")};
	text-align: ${(props) => (props.align ? props.align : "left")};
	font-weight: normal;
	font-variant-ligatures: common-ligatures;
	margin-bottom: var(--space-xxsm);

	@media screen and (${breakpoints.md}) {
		font-size: ${(props) => (props.heroTitle ? "5.125rem" : "3.25rem")};
		line-height: ${(props) => (props.heroTitle ? "6.15rem" : "3.75rem")};
	}
`;
