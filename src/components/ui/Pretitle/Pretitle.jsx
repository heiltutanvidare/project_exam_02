import { StyledPretitle } from "./pretitle.styles";

interface Props {
	children: string;
	align?: string;
	color?: string;
}

export default function Pretitle({ children, align, color }: Props) {
	return (
		<StyledPretitle align={align} color={color}>
			{children}
		</StyledPretitle>
	);
}
