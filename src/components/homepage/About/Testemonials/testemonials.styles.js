import styled from "styled-components";

export const StyledTestemonials = styled.div`
	margin-bottom: var(--space-lg);

	.pullup--xl {
		margin-bottom: -12rem;
	}

	.pullup--lg {
		margin-bottom: -6rem;
	}

	.testemonial__name {
		color: var(--clr-drk-600);
		font-size: 0.75rem;
		margin-top: var(--space-xxsm);
		text-align: center;
		position: relative;

		::after,
		::before {
			position: absolute;
			left: 50%;
			right: 0;
			transform: translateX(-50%);
			content: "";
			background: var(--clr-primary-500);
			height: 1px;
			width: 1rem;
		}

		::before {
			top: -6px;
		}

		::after {
			bottom: -6px;
		}
	}
`;

export const StyledQuotationMarks = styled.p`
	font-family: Viaoda Libre;
	font-style: normal;
	font-weight: normal;
	font-size: 8.5rem;
	line-height: 1;
	margin-bottom: -3.5rem;
	text-align: center;
	color: var(--clr-primary-500);
`;
