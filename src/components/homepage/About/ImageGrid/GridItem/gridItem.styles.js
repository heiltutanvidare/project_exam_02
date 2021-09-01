import styled from "styled-components";
import breakpoints from "../../../../../global/styles/breakpoints";

export const StyledGridItem = styled.div`
	height: 4.25rem;
	background: url(${(props) => (props.image ? props.image : "pink")});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;

	@media screen and (${breakpoints.sm}) {
		height: 7.5rem;
	}

	@media screen and (${breakpoints.lg}) {
		height: 10.75rem;
	}
`;
