import React from "react";
import { StyledGridItem } from "./gridItem.styles";

interface Props {
	image: string;
}

export default function GridItem({ image }: Props) {
	return <StyledGridItem image={image}></StyledGridItem>;
}
