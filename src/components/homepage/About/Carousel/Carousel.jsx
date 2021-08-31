import CarouselItem from "./CarouselItem/CarouselItem";
import article01 from "../../../../assets/photos/article01.jpeg";
import article02 from "../../../../assets/photos/article02.jpg";
import article03 from "../../../../assets/photos/article03.jpg";
import article04 from "../../../../assets/photos/article04.jpg";
import article05 from "../../../../assets/photos/article05.jpg";
import article06 from "../../../../assets/photos/article06.jpg";
import CarouselNav from "./CarouselNav/CarouselNav";
import { StyledCarousel, StyledCarouselContainer } from "./carousel.styles";

export default function Carousel() {
	return (
		<StyledCarouselContainer>
			<CarouselNav />

			<StyledCarousel>
				<CarouselItem
					image={article01}
					heading="See the seven mountains"
				/>
				<CarouselItem
					image={article02}
					heading="Oceanic delicacies at Bergen Fish Market"
				/>
				<CarouselItem image={article03} heading="An amazing view" />
				<CarouselItem image={article04} heading="Seaside tranquility" />
				<CarouselItem
					image={article05}
					heading="Group discounts to save you time and money"
				/>
				<CarouselItem
					image={article06}
					heading="How to get to around"
				/>
			</StyledCarousel>
		</StyledCarouselContainer>
	);
}
