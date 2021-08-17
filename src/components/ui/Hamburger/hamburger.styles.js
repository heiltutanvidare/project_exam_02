import styled from "styled-components";

export const StyledHamburger = styled.div`
	width: 1.5rem;
	height: 1.5rem;
	position: relative;
	cursor: pointer;
	overflow: hidden;

	.line {
		height: 3px;
		background-color: var(--clr-drk-50);
		border-radius: 2px;
		position: absolute;
	}

	.line--top {
		left: 0;
		top: 0;
		width: 1.5rem;
	}

	.line--middle {
		left: 40%;
		top: 50%;
		transform: translateY(-50%);
		right: 0;
		transition: all var(--transition-fast);
	}

	.line--bottom {
		left: 0;
		bottom: 0;
		width: 1.5rem;
	}

	&:hover {
		.line--middle {
			left: 0;
		}
	}

	&.isOpen {
		.line--top {
			top: 50%;
			transform: rotate(45deg) translateY(-70%);
		}
		.line--middle {
			left: 0;
			transform: translateX(-100%);
		}
		.line--bottom {
			bottom: 50%;
			transform: rotate(-45deg) translateY(70%);
		}
	}
`;
