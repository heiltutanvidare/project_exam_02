import styled from "styled-components";

export const StyledAdminPage = styled.section`
	margin: 4rem 0;

	.nav {
		display: flex;
		justify-content: center;
		margin-bottom: var(--space-xxsm);

		&__list {
			display: flex;
			align-items: flex-end;
			list-style: none;
			padding: 0;
			gap: 2.25rem;
		}

		&__list-item {
			cursor: pointer;
			display: flex;
			flex-direction: column;
			justify-content: center;
			color: var(--clr-drk-300);
			transition: all var(--transition-fast);

			svg {
				max-height: 1rem;
			}

			p {
				font-size: 0.75rem;
			}

			:hover {
				color: var(--clr-drk-900);
			}
		}

		.active {
			color: var(--clr-drk-900);
		}
	}
`;
