import { StyledCarousel, StyledCarouselContainer } from "./carousel.styles";
// import ArrowLeft from "../../../../assets/graphics/arrowLeft.svg";
// import ArrowRight from "../../../../assets/graphics/arrowRight.svg";
import CarouselItem from "./CarouselItem";
import article01 from "../../../../assets/photos/article01.jpeg";
import article02 from "../../../../assets/photos/article02.jpg";
import article03 from "../../../../assets/photos/article03.jpg";
import article04 from "../../../../assets/photos/article04.jpg";
import CarouselNav from "./CarouselNav";

export default function Carousel() {
	return (
		<StyledCarouselContainer>
			<CarouselNav />
			<StyledCarousel>
				<CarouselItem
					image={article01}
					heading="Some title about amazing experiences goes here"
				/>
				<CarouselItem
					image={article02}
					heading="Some title about amazing experiences goes here"
				/>
				<CarouselItem
					image={article03}
					heading="Some title about amazing experiences goes here"
				/>
				<CarouselItem
					image={article04}
					heading="Some title about amazing experiences goes here"
				/>
			</StyledCarousel>
		</StyledCarouselContainer>
	);
}
