import styled from "styled-components";

export const StyledForm = styled.form`
	margin: var(--space-xsm) 0;
	border-radius: var(--br-xsm);
	overflow: hidden;
	box-shadow: var(--box-shadow-md);

	#checkin,
	#checkout {
		min-height: 1rem;
		font-size: 0.875rem;
		color: var(--clr-drk-500);
		padding: 0 0.5rem 0 0;
		font-size: 1rem;
		background: none;
		outline: none;
		border: none;
		padding: 0;
		width: 100%;
	}

	#checkin::-webkit-calendar-picker-indicator,
	#checkout::-webkit-calendar-picker-indicator {
		opacity: 0.75;
	}
`;

export const StyledFormGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1px;
	background: var(--clr-drk-100);
`;

export const StyledField = styled.div`
	background: var(--clr-white);
	display: grid;
	padding: 0.5rem 0.5rem 0.5rem 0.75rem;
`;

export const StyledLabel = styled.label`
	color: var(--clr-drk-800);
	font-size: 0.75rem;
	font-weight: 700;
	width: 100%;
`;

export const StyledInput = styled.input`
	font-size: 1rem;
	background: none;
	outline: none;
	border: none;
	padding: 0;
	width: 100%;

	&::placeholder {
		font-size: 0.875rem;
		color: var(--clr-drk-500);
	}
`;
