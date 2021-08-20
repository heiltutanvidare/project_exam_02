import { StyledDecorativeImage } from "./decorativeImage.styles";

interface Props {
	image: string;
	height?: string;
}

export default function DecorativeImage({ image, height }: Props) {
	return <StyledDecorativeImage image={image} height={height} />;
}
