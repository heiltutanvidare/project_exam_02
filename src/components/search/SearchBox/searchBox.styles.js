import styled from "styled-components";

export const StyledForm = styled.form`
	margin: var(--space-xsm) 0;
	border-radius: var(--br-sm);
	box-shadow: var(--box-shadow-md);
	background: none;

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

	.hidden {
		display: none;
	}

	.suggestion {
		position: relative;
		border-radius: var(--br-sm) var(--br-sm) 0 0;

		&__container {
			position: absolute;
			top: 3.75em;
			left: 0;
			width: 100%;
			color: black;
			background: white;
			z-index: 100;
			box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.5);
			display: grid;
		}

		&__option {
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 1rem 1.5rem 1rem 1.25rem;
			transition: all 0.025s linear;
			cursor: pointer;
			border-left: 0.25rem solid transparent;

			:hover,
			:focus {
				background: var(--clr-drk-100);
				border-left: 0.25rem solid var(--clr-primary-500);
			}

			img {
				width: 4rem;
				height: 4rem;
				object-fit: cover;
				border-radius: 100%;
				margin-left: 2rem;
			}
		}
	}

	button {
		border-radius: 0 0 var(--br-sm) var(--br-sm);
	}
`;

export const StyledFormGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1px;
`;

export const StyledField = styled.div`
	background: var(--clr-white);
	display: grid;
	padding: 0.5rem 0.5rem 0.5rem 0.75rem;
	grid-column: ${(props) => (props.span === "all" ? "1 / -1" : "")};
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
