import { StyledLogo } from "./logo.styles";

interface Props {
	content: string;
	href?: string;
}

export default function Logo({ content, href = "/" }: Props) {
	return <StyledLogo href={href}>{content}</StyledLogo>;
}
