import React from "react";
import { StyledParagraph } from "./paragraph.styles";

interface Props {
	align?: string;
	children: string;
}

export default function Paragraph({ children, align = "left" }: Props) {
	return <StyledParagraph align={align}>{children}</StyledParagraph>;
}
