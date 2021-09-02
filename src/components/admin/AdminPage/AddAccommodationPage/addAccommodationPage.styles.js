import styled from "styled-components";
import breakpoints from "../../../../global/styles/breakpoints";

export const StyledAddAccommodationPage = styled.section`
	margin-top: 6rem;
	margin-left: auto;
	margin-right: auto;
	max-width: 762px;

	@media screen and (${breakpoints.md}) {
		margin-top: 11rem;
	}
`;
