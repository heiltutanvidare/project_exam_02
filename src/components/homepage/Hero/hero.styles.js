import styled from "styled-components";
import herobg from "../../../assets/photos/herobg.jpg";

export const StyledHero = styled.section`
	height: 100vh;
	max-height: 1024px;
	color: white;
	background: url(${herobg});
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	position: relative;

	.overlay {
		background: rgba(0, 0, 0, 0.3);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}

	.inner {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 100%;
		position: relative;
		z-index: 1;
	}
`;