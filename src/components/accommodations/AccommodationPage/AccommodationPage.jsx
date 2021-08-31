import { useContext } from "react";
import SearchContext from "../../../global/contexts/SearchContext";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
import { API_BASE_URL } from "../../../global/constants/api";
import Container from "../../layout/Container/Container";
import Loader from "../../ui/Loader/Loader";
import PriceBox from "../../ui/PriceBox/PriceBox";
import BreadCrumbs from "../../ui/BreadCrumbs/BreadCrumbs";
import AccommodationImages from "./AccommodationImages/AccommodationImages";
import BookingContext from "../../../global/contexts/bookingContext";
import EnquiryForm from "../../forms/EnquityForm/EnquiryForm";
import { StyledAccommodationPage } from "./accommodationPage.styles";

export default function AccommodationPage() {
	// get the accommodation id from the URL search params
	const { id } = useParams();

	// fetch the data using the base URL and id
	const { data, fetching, error } = useFetch(
		`${API_BASE_URL}/establishments/${id}`
	);

	// Get the search context
	const [search] = useContext(SearchContext);

	const [bookingIsVisible] = useContext(BookingContext);

	if (fetching) {
		return (
			<Container>
				<Loader />
			</Container>
		);
	}

	if (error) {
		return (
			// TODO: Use the message component here
			<Container>
				<p>An error occured 😔</p>
			</Container>
		);
	}

	return (
		// TODO: Create and use a breadcrumb component
		<StyledAccommodationPage>
			<BreadCrumbs />
			<AccommodationImages data={data} />
			<Container>
				<div className="place__flex">
					<p className="place__type">
						{data.type.accommodation_type}
					</p>
					<p className="place__distance">
						<span>{data.km_from_city} km</span> from city centre
					</p>
				</div>
				<h1 className="place__title">{data.title}</h1>
				<div className="place__room-details">
					<p className="place__bedrooms">
						<span>{data.bedrooms} </span>
						{data.bedrooms.length > 1 ? "bedroom" : "bedrooms"}
					</p>
					<p className="place__bathrooms">
						<span>{data.bathrooms} </span>
						{data.bathrooms.length > 1 ? "bathroom" : "bathrooms"}
					</p>
				</div>
				<p className="place__description">{data.description}</p>
				<h2 className="place__amenities-title">Amenities</h2>
				<ul className="place__amenities">
					{data.amenities.map((amenity) => {
						return (
							<li className="place__amenity" key={amenity.id}>
								<img
									src={amenity.icon.url}
									alt={amenity.amenity}
								/>
								<p>{amenity.amenity}</p>
							</li>
						);
					})}
				</ul>
			</Container>

			<div
				className={
					bookingIsVisible
						? "booking-container visible"
						: "booking-container"
				}
			>
				<h2 className="booking__heading">Book accommodation</h2>
				<p className="booking__title">{data.title}</p>
				<EnquiryForm asBooking={true} title={data.title} />
			</div>

			<PriceBox data={data} search={search} />
		</StyledAccommodationPage>
	);
}
