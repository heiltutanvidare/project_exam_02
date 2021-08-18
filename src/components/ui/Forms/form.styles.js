import styled from "styled-components";

export const StyledFormField = styled.div`
	margin-bottom: var(--space-xxsm);
	display: flex;
	flex-direction: column;
`;

export const StyledLabel = styled.label`
	color: var(--clr-drk-500);
	font-size: 0.625rem;
`;

export const StyledInput = styled.input`
	color: var(--clr-drk-500);
	font-family: inherit;
	border: none;
	background: none;
	border-bottom: 1px solid var(--clr-drk-900);
	padding: 0.4rem 0;

	&::placeholder {
		color: var(--clr-drk-500);
		font-size: 0.75rem;
	}
`;

export const StyledTextArea = styled.textarea`
	color: var(--clr-drk-500);
	font-family: inherit;
	border: none;
	background: none;
	border-bottom: 1px solid var(--clr-drk-900);
	padding: 0.4rem 0;

	&::placeholder {
		color: var(--clr-drk-500);
		font-size: 0.75rem;
	}
`;
