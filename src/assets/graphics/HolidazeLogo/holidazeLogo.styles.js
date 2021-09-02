import styled from "styled-components";

export const StyledHolidazeLogo = styled.div`
	cursor: pointer;
	transition: opacity 0.125s linear;
	svg {
		fill: var(--clr-drk-50);
		min-height: 2rem;
	}

	#z01,
	#z02 {
		animation: zzz 2s linear infinite;
	}

	#z02 {
		animation-delay: 1s;
	}

	@keyframes zzz {
		from {
			transform: translate(20px, -5px) scale(0.75);
			opacity: 0;
		}
		to {
			transform: translate(70px, 0px) scale(0);
			opacity: 1;
		}
	}

	:hover {
		opacity: 0.5;
	}
`;
