import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledLoginForm = styled.div`
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
	textarea,
	select {
		font-family: inherit;
		border: 1px solid var(--clr-drk-500);
		padding: 0.5rem;
		border-radius: var(--br-xsm);
		background-color: var(--clr-white);

		&::placeholder {
			font-size: 0.75rem;
		}
	}

	input[type="file"] {
		width: 100%;
	}

	.form__checkbox__grid {
		margin-top: 0.25rem;
		display: flex;
		flex-wrap: wrap;
		gap: 1rem;
	}

	.form__checkbox__field {
		display: flex;
		align-items: center;

		input,
		label {
			margin: 0;
			line-height: 1.618;
		}

		input {
			margin-right: 0.25rem;
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

		button {
			margin: 0 0 2rem 0;
		}

		@media screen and (${breakpoints.sm}) {
			display: flex;
			gap: 2rem;
			justify-content: space-between;

			button {
				margin: 0;
			}
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

	.form__grid {
		display: grid;
		@media screen and (${breakpoints.sm}) {
			grid-template-columns: repeat(2, 1fr);
			grid-column-gap: 1rem;
		}
	}
`;
