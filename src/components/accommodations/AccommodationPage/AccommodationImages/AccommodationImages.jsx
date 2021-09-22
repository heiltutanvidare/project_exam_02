import { useState } from "react";
import PropTypes from "prop-types";
import ChevronLeft from "../../../../assets/graphics/ChevronLeft";
import ChevronRight from "../../../../assets/graphics/ChevronRight";
import { StyledAccommodationImages } from "./accommodationImages.styles";

function AccommodationImages({ data: accommodation, asCarousel }) {
	// Array of the main and additional images combined
	let images = [accommodation.main_image, ...accommodation.images];

	// State variable that will control wich image in the array is showing
	const [activeIndex, setActiveIndex] = useState(0);

	// Move backwards in the image array
	function viewPrevImage() {
		if (activeIndex === 0) {
			setActiveIndex(images.length - 1);
		} else {
			setActiveIndex(activeIndex - 1);
		}
	}

	// Move forwards in the image array
	function viewNextImage() {
		if (activeIndex === images.length - 1) {
			setActiveIndex(0);
		} else {
			setActiveIndex(activeIndex + 1);
		}
	}

	if (asCarousel) {
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
	} else {
		return (
			<StyledAccommodationImages>
				<div className="image__grid">
					<div className="image__grid__image-container">
						{/* Container needed to prevent images from stretching in Safari*/}
						<img
							src={images[0].url}
							alt={accommodation.title}
							className="image__grid__image image__grid__image--main"
						/>
					</div>
					<div className="image__grid__secondary__images">
						{accommodation.images.map((img) => {
							return (
								<div
									key={img.id}
									className="image__grid__image-container"
								>
									{/* Container needed to prevent images from stretching in Safari*/}
									<img
										src={img.url}
										alt={`The interior of ${accommodation.title}`}
										className="image__grid__image image__grid__image--secondary"
									/>
								</div>
							);
						})}
					</div>
				</div>
			</StyledAccommodationImages>
		);
	}
}

export default AccommodationImages;

AccommodationImages.propTypes = {
	data: PropTypes.object.isRequired,
	asCarousel: PropTypes.bool.isRequired,
};
