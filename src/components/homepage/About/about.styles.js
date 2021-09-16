import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledAbout = styled.section`
	margin-top: var(--space-sm);
	max-width: 100vw;
	overflow-x: hidden;

	@media screen and (${breakpoints.md}) {
		margin-bottom: var(--space-sm);
	}
`;
