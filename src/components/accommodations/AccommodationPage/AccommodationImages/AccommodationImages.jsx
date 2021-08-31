import { useState } from "react";
import ChevronLeft from "../../../../assets/graphics/ChevronLeft";
import ChevronRight from "../../../../assets/graphics/ChevronRight";
import { StyledAccommodationImages } from "./accommodationImages.styles";

function AccommodationImages({ data: accommodation }) {
	console.log(accommodation);
	let images = [accommodation.main_image, ...accommodation.images];
	console.log(images);

	const [activeIndex, setActiveIndex] = useState(0);

	function viewPrevImage() {
		if (activeIndex === 0) {
			setActiveIndex(images.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	}

	function viewNextImage() {
		if (activeIndex === images.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	}

	return (
		<StyledAccommodationImages>
			<img
				src={images[activeIndex].url}
				alt={accommodation.title}
				className="image"
			/>
			<div className="image__navigation">
				<div
					className="image__navigation__prev"
					onClick={viewPrevImage}
				>
					<ChevronLeft />
				</div>
				<div
					className="image__navigation__next"
					onClick={viewNextImage}
				>
					<ChevronRight />
				</div>
			</div>
			<div className="image__numbering">
				<small>
					{activeIndex + 1}/{images.length}
				</small>
			</div>
		</StyledAccommodationImages>
	);
}

export default AccommodationImages;
