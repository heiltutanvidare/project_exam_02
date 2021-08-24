import styled from "styled-components";

export const StyledAdminHero = styled.div`
	background: linear-gradient(
		to right,
		var(--clr-primary-500),
		var(--clr-primary-900)
	);
	color: var(--clr-drk-50);
	padding: 3rem 0;
	margin-bottom: var(--space-xxsm);

	h1 {
		font-size: 1.3125rem;
		line-height: 1;
		margin-bottom: var(--space-xxxsm);
	}

	p {
		font-size: 1rem;
	}
`;
