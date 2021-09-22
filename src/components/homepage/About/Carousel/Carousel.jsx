import CarouselItem from "./CarouselItem/CarouselItem";
import article01 from "../../../../assets/photos/article01.jpeg";
import article02 from "../../../../assets/photos/article02.jpg";
import article03 from "../../../../assets/photos/article03.jpg";
import article04 from "../../../../assets/photos/article04.jpg";
import article05 from "../../../../assets/photos/article05.jpg";
import article06 from "../../../../assets/photos/article06.jpg";
import CarouselNav from "./CarouselNav/CarouselNav";
import { StyledCarousel, StyledCarouselContainer } from "./carousel.styles";

const articles = [
	{
		id: 1,
		img: article01,
		heading: "See the seven mountains",
	},
	{
		id: 2,
		img: article02,
		heading: "Oceanic delicacies at Bergen Fish Market",
	},
	{
		id: 3,
		img: article03,
		heading: "An amazing view",
	},
	{
		id: 4,
		img: article04,
		heading: "Seaside tranquility",
	},
	{
		id: 5,
		img: article05,
		heading: "Group discounts to save you time and money",
	},
	{
		id: 6,
		img: article06,
		heading: "How to get to around",
	},
];

export default function Carousel() {
	return (
		<StyledCarouselContainer>
			<CarouselNav />

			<StyledCarousel>
				{articles.map((article) => {
					return (
						<CarouselItem
							key={article.id}
							image={article.img}
							heading={article.heading}
						/>
					);
				})}
			</StyledCarousel>
		</StyledCarouselContainer>
	);
}
