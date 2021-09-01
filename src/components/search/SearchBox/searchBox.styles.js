import styled from "styled-components";
import breakpoints from "../../../global/styles/breakpoints";

export const StyledForm = styled.form`
	margin: var(--space-xsm) 0;
	border-radius: var(--br-sm);
	box-shadow: var(--box-shadow-md);
	background: none;

	@media screen and (${breakpoints.lg}) {
		background: var(--clr-white);
		padding: 0.5rem 1rem;
	}

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

		@media screen and (${breakpoints.lg}) {
			border-radius: 0;
			border-left: none;
			padding-left: 1rem;
		}

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
		grid-column: 1 / -1;

		@media screen and (${breakpoints.lg}) {
			grid-column: span 1;
			border-radius: var(--br-sm);
		}
	}
`;

export const StyledFormGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-gap: 1px;

	@media screen and (${breakpoints.lg}) {
		grid-template-columns: repeat(5, 1fr);
		grid-gap: 1.5rem;
	}
`;

export const StyledField = styled.div`
	background: var(--clr-white);
	display: grid;
	padding: 0.5rem 0.5rem 0.5rem 0.75rem;
	grid-column: ${(props) => (props.span === "all" ? "1 / -1" : "")};

	@media screen and (${breakpoints.lg}) {
		grid-column: ${(props) => (props.span === "all" ? "1 / 3" : "")};
		border-left: 1px solid var(--clr-drk-100);
		padding-left: 2rem;
	}
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
