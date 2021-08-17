import styled from "styled-components";

export const StyledCarouselItem = styled.div`
	background-image: url(${(props) => (props.image ? props.image : "")});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center center;
	min-width: 8.9rem;
	height: 15.6rem;
	position: relative;

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
	}

	h2 {
		font-family: Viaoda Libre;
		font-weight: normal;
		font-variant-ligatures: common-ligatures;
		font-size: 1rem;
		line-height: 1.0625rem;
		text-align: center;
		color: #ffffff;
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		padding: 0 0.5em 0.75em 0.5em;
	}
`;
