import styled from "styled-components";

export const StyledDecorativeImage = styled.div`
	background-image: url(${(props) => (props.image ? props.image : "")});
	background-size: cover;
	background-position: center center;
	height: ${(props) => (props.height ? props.height : "4rem")};
`;
