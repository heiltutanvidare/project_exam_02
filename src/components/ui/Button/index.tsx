import { StyledButtonOutline, StyledButtonFilled } from "./button.styles";

interface Props {
	children: string;
	href?: string;
	align?: string;
	fullwidth?: boolean;
	variant: string;
}

export default function Button({
	fullwidth,
	children,
	href,
	variant = "filled",
	align,
}: Props) {
	if (variant === "outlined") {
		return (
			<StyledButtonOutline fullwidth={fullwidth} align={align}>
				{children}
			</StyledButtonOutline>
		);
	} else {
		return (
			<StyledButtonFilled fullwidth={fullwidth} align={align}>
				{children}
			</StyledButtonFilled>
		);
	}
}
