import { StyledPretitle } from "./pretitle.styles";

interface Props {
	children: string;
}

export default function Pretitle({ children }: Props) {
	return <StyledPretitle>{children}</StyledPretitle>;
}
