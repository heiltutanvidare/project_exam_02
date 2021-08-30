import styled from "styled-components";

export const StyledHolidazeLogo = styled.div`
	fill: var(--clr-drk-50);
	max-height: 2.25rem;
	transform: translateY(-10%);

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
`;
