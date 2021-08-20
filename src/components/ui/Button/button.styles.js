import styled from "styled-components";

export const StyledButtonOutline = styled.button`
	margin-top: var(--space-xxsm);
	margin-left: ${(props) => (props.align === "center" ? "auto" : "unset")};
	margin-right: ${(props) =>
		props.align === "center" ? "auto" : "var(--space-xxsm)"};
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	font-weight: 700;
	padding: 0.5rem 1rem;
	border-radius: var(--br-sm);
	border: 1px solid var(--clr-drk-900);
	background: none;
	color: var(--clr-drk-900);
	width: ${(props) => (props.fullwidth ? "100%" : "auto")};
	cursor: pointer;
	transition: all 0.125s linear;

	&:hover {
		background: var(--clr-drk-900);
		color: var(--clr-drk-50);
		transform: scale(0.98);
	}
`;

export const StyledButtonFilled = styled(StyledButtonOutline)`
	background: var(--clr-drk-900);
	color: var(--clr-drk-50);

	&:hover {
		background: var(--clr-drk-600);
		border-color: var(--clr-drk-600);
	}
`;

export const StyledButtonForm = styled(StyledButtonFilled)`
	border-radius: 0;
	margin-top: 0;
	display: flex;
	align-content: center;
	justify-content: center;

	img {
		max-width: 1.25rem;
		margin-right: 0.5rem;
	}

	&:hover {
		background: var(--clr-drk-600);
		transform: scale(1);
	}
`;
