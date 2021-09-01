import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledAbout = styled.section`
	margin-top: var(--space-sm);

	@media screen and (${breakpoints.md}) {
		margin-bottom: var(--space-sm);
	}
`;
