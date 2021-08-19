import {
	StyledButtonOutline,
	StyledButtonFilled,
	StyledButtonForm,
} from "./button.styles";
import search from "../../../assets/graphics/Search.svg";

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
	} else if (variant === "form") {
		return (
			<StyledButtonForm fullwidth={fullwidth} align={align}>
				<img src={search} alt="Search icon" />
				{children}
			</StyledButtonForm>
		);
	} else {
		return (
			<StyledButtonFilled fullwidth={fullwidth} align={align}>
				{children}
			</StyledButtonFilled>
		);
	}
}
