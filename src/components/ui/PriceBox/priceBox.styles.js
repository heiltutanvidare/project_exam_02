import styled from "styled-components";

export const StyledPriceBox = styled.div`
	position: sticky;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;

	.priceBox {
		background-color: var(--clr-white);
		padding: var(--space-xxxsm) 0;
		box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.16),
			0 -3px 6px rgba(0, 0, 0, 0.23);
		&__dates {
			display: flex;
			justify-content: space-between;
		}

		&__checkin,
		&__checkout {
			font-size: 0.875rem;
			color: var(--clr-drk-600);
		}

		&__checkin span,
		&__checkout span {
			font-size: 0.75rem;
			font-weight: 700;
			color: var(--clr-drk-900);
			margin-right: 2px;
		}

		&__price {
			font-size: 0.75rem;
			span {
				font-size: 1.125rem;
				font-weight: 700;
			}
		}

		&__total {
			color: var(--clr-drk-500);
			font-size: 0.875rem;
		}

		&__bottom {
			margin-top: var(--space-xxxsm);
			display: flex;
			align-items: center;
			justify-content: space-between;
		}

		&__button {
			display: flex;
			flex-direction: row;
			justify-content: center;
			align-items: center;
			font-weight: 700;
			padding: 0.5rem 1rem;
			border-radius: var(--br-sm);
			border: 1px solid var(--clr-drk-900);
			background: none;
			cursor: pointer;
			transition: all 0.125s linear;
			background: var(--clr-drk-900);
			color: var(--clr-drk-50);

			&:hover {
				background: var(--clr-drk-600);
				border-color: var(--clr-drk-600);
			}
		}
	}
`;
