import styled from "styled-components";

export const StyledContainer = styled.div`
	max-width: ${(props) =>
		props.maxWidth ? props.maxWidth : "var(--max-width)"};
	width: 85%;
	margin-left: auto;
	margin-right: auto;
`;
