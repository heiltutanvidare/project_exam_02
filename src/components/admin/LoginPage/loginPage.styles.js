import styled from "styled-components";

export const StyledLoginPage = styled.main`
	margin-top: 4rem;
	.login {
		&__image {
			max-height: 280px;
			object-fit: cover;
			width: 100%;
			object-position: center center;
			margin-bottom: var(--space-xsm);
		}

		&__title {
			font-size: 1.3rem;
		}

		&__text {
			color: var(--clr-drk-700);
		}
	}
`;
