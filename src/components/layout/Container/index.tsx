import React from "react";
import { StyledContainer } from "./container.styles";

interface Props {
	children: React.ReactNode;
}

export default function Container({ children }: Props) {
	return <StyledContainer>{children}</StyledContainer>;
}
