import styled from "styled-components";

export const StyledLoginForm = styled.section`
	margin-top: var(--space-xxsm);

	.message-container {
		margin-bottom: var(--space-xxsm);
	}
	.form__field {
		display: flex;
		flex-direction: column;
		margin-bottom: var(--space-xxxsm);
	}

	label {
		font-size: 0.75rem;
		margin-bottom: 5px;
	}

	input,
	textarea {
		font-family: inherit;
		border: 1px solid var(--clr-drk-500);
		padding: 0.5rem;
		border-radius: var(--br-xsm);

		&::placeholder {
			font-size: 0.75rem;
		}
	}

	.form__error {
		margin-top: 4px;
		font-size: 0.625rem;
		font-weight: 700;
		color: var(--clr-danger);
	}

	.hasError {
		border-color: var(--clr-danger);

		&::placeholder {
			color: var(--clr-danger);
		}
	}

	.button-group {
		margin-top: var(--space-xxsm);
		display: flex;
		align-items: center;

		button {
			margin: 0;
		}

		.form__forgot-password {
			margin-left: 1rem;
			font-size: 0.625rem;
			line-height: 1;
			padding-bottom: 0.35rem;
			font-weight: 700;
			color: var(--clr-drk-600);
			border-bottom: 1px solid var(--clr-drk-600);
		}
	}
`;
