import { StyledButtonOutline, StyledButtonFilled } from "./button.styles";

interface Props {
	children: string;
	href?: string;
	align?: string;
	variant: string;
}

export default function Button({
	children,
	href,
	variant = "filled",
	align,
}: Props) {
	if (variant === "outlined") {
		return (
			<StyledButtonOutline align={align}>{children}</StyledButtonOutline>
		);
	} else {
		return (
			<StyledButtonFilled align={align}>{children}</StyledButtonFilled>
		);
	}
}
