import styled from "styled-components";

export const StyledLoader = styled.div`
	margin: ${(props) =>
		props.inMessage ? "1.5rem 0 0 0" : "var(--space-xsm) 0"};
	display: grid;
	place-content: center;
	place-content: ${(props) => (props.inMessage ? "start" : "center")};

	.loading__text {
		font-size: 0.85rem;
		text-align: center;
	}

	.dots {
		display: flex;
		padding-bottom: 0.5rem;
		justify-content: center;
	}

	.dot {
		height: 0.75rem;
		width: 0.75rem;
		background-color: ${(props) =>
			props.bg ? props.bg : "var(--clr-drk-600)"};
		border-radius: 50%;
		margin-right: 0.25rem;
		animation: loading 0.5s linear alternate infinite;
	}

	.dot:nth-of-type(2) {
		animation-delay: 0.1s;
	}

	.dot:nth-of-type(3) {
		animation-delay: 0.2s;
	}

	.dot:nth-of-type(4) {
		animation-delay: 0.3s;
	}

	.dot:nth-of-type(5) {
		animation-delay: 0.4s;
		margin-right: 0;
	}

	@keyframes loading {
		from {
			transform: translateY(0);
			filter: brightness(1);
		}
		to {
			transform: translateY(-0.5rem);
			filter: brightness(3);
		}
	}
`;
