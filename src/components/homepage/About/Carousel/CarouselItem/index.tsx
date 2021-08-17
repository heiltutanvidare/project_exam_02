import { StyledCarouselItem } from "./carouselitem.styles";

interface Props {
	image: string;
	heading: string;
}

export default function CarouselItem({ image, heading }: Props) {
	return (
		<StyledCarouselItem image={image}>
			<div className="overlay"></div>
			<h2>{heading}</h2>
		</StyledCarouselItem>
	);
}
