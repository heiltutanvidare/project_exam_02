import styled from "styled-components";

export const StyledGridItem = styled.div`
	height: 4.25rem;
	background: url(${(props) => (props.image ? props.image : "pink")});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
`;
