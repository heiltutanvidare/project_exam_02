import { StyledButtonOutline, StyledButtonFilled } from "./button.styles";

interface Props {
	children: string;
	href?: string;
	variant: string;
}

export default function Button({ children, href, variant = "filled" }: Props) {
	if (variant === "outlined") {
		return <StyledButtonOutline>{children}</StyledButtonOutline>;
	} else {
		return <StyledButtonFilled>{children}</StyledButtonFilled>;
	}
}
