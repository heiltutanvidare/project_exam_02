import styled from "styled-components";

export const StyledContact = styled.div`
	.form__field {
		margin-bottom: var(--space-xxsm);
		display: flex;
		flex-direction: column;
	}

	#scrollToContactUs {
		scroll-margin-top: 12rem;
	}

	label {
		color: var(--clr-drk-500);
		font-size: 0.625rem;
	}

	input {
		color: var(--clr-drk-500);
		font-family: inherit;
		border: none;
		background: none;
		border-bottom: 1px solid var(--clr-drk-900);
		padding: 0.4rem;
		border-radius: 0;
		margin: 0;

		&::placeholder {
			color: var(--clr-drk-500);
			font-size: 0.75rem;
		}
	}

	textarea {
		color: var(--clr-drk-500);
		font-family: inherit;
		border: none;
		background: none;
		border-bottom: 1px solid var(--clr-drk-900);
		padding: 0.4rem;
		border-radius: 0;
		margin: 0;

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
