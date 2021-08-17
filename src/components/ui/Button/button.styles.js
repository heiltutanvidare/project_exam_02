import styled from "styled-components";

export const StyledButtonOutline = styled.button`
	margin-top: var(--space-xxsm);
	margin-right: var(--space-xxsm);
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
`;

export const StyledButtonFilled = styled(StyledButtonOutline)`
	background: var(--clr-drk-900);
	color: var(--clr-drk-50);
`;
