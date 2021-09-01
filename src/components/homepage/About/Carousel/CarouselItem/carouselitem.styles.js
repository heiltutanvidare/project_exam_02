import styled from "styled-components";

export const StyledCarouselItem = styled.div`
	background-image: url(${(props) => (props.image ? props.image : "")});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	min-width: 11rem;
	height: 17rem;
	position: relative;
	cursor: pointer;

	&:hover .overlay {
		opacity: 0.5;
	}

	.overlay {
		position: absolute;
		top: 50%;
		left: 0;
		right: 0;
		bottom: 0;
		background-image: linear-gradient(
			var(--clr-drk-900-transp),
			var(--clr-drk-900)
		);
		transition: opacity 0.25s linear;
	}

	h2 {
		font-family: Viaoda Libre;
		font-weight: normal;
		font-variant-ligatures: common-ligatures;
		font-size: 1.2rem;
		line-height: 1.4rem;
		text-align: center;
		color: #ffffff;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 0.75em 0.75em 0.75em;
	}
`;
