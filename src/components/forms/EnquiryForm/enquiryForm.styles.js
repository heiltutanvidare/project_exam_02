import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledEnquiryForm = styled.div`
	color: var(--clr-drk-200);

	form {
		max-width: 960px;
		@media screen and (${breakpoints.lg}) {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-gap: 1rem;
		}
	}

	.form__field {
		margin-bottom: var(--space-xxsm);
		display: flex;
		flex-direction: column;
	}

	label {
		font-size: 0.625rem;
	}

	input {
		color: var(--clr-drk-200);
		font-family: inherit;
		border: none;
		background: none;
		border-bottom: 1px solid var(--clr-drk-700);
		padding: 0.4rem;
		border-radius: 0;
		margin: 0;
		width: 100%;

		&::placeholder {
			color: var(--clr-drk-500);
			font-size: 0.75rem;
		}
	}

	#checkin,
	#checkout {
		min-height: 1rem;
	}

	#checkin::-webkit-calendar-picker-indicator,
	#checkout::-webkit-calendar-picker-indicator {
		/* display: none; */
		filter: invert(1);
		opacity: 0.5;
	}

	textarea {
		color: var(--clr-drk-200);
		font-family: inherit;
		border: none;
		background: none;
		border-bottom: 1px solid var(--clr-drk-700);
		padding: 0.4rem;
		border-radius: 0;
		margin: 0;
		height: 100%;

		&::placeholder {
			color: var(--clr-drk-500);
			font-size: 0.75rem;
		}
	}

	.form__error {
		margin-top: 0.5rem;
		color: var(--clr-danger);
		font-size: 0.625rem;
		line-height: 1;
	}

	.hasError {
		border-color: var(--clr-danger);
		background: var(--clr-danger-transp);

		&::placeholder {
			color: var(--clr-danger);
		}
	}
`;
