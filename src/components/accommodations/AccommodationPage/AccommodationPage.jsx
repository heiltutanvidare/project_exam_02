import { useContext } from "react";
import { Helmet } from "react-helmet-async";
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
				<div className="pushDown">
					<Loader />
				</div>
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
			<Helmet>
				<title>Holidaze | {data.title}</title>
				<meta name="description" content={data.description} />
			</Helmet>
			<BreadCrumbs />
			<div className="place__images__mobile">
				<AccommodationImages data={data} asCarousel={true} />
			</div>
			<div className="place__images__desktop">
				<AccommodationImages data={data} asCarousel={false} />
			</div>
			<Container>
				<div className="place__top__grid">
					<h1 className="place__title">{data.title}</h1>
					<div className="place__details">
						<p className="place__type">
							{data.type.accommodation_type}
						</p>
						<p className="place__distance">
							<span>{data.km_from_city} km</span> from city centre
						</p>
						<p className="place__bedrooms">
							<span>{data.bedrooms} </span>
							{data.bedrooms.length > 1 ? "bedroom" : "bedrooms"}
						</p>
						<p className="place__bathrooms">
							<span>{data.bathrooms} </span>
							{data.bathrooms.length > 1
								? "bathroom"
								: "bathrooms"}
						</p>
					</div>
				</div>
				<div className="place__bottom__grid">
					<p className="place__description">{data.description}</p>
					<h2 className="place__amenities-title">Amenities</h2>
					<ul className="place__amenities">
						{data.amenities.map((amenity) => {
							return (
								<li className="place__amenity" key={amenity.id}>
									<div className="place__amenity__image">
										<img
											src={amenity.icon.url}
											alt={amenity.amenity}
										/>
									</div>
									<p>{amenity.amenity}</p>
								</li>
							);
						})}
					</ul>
					{!bookingIsVisible && (
						<div className="place__priceBox--desktop">
							<PriceBox data={data} search={search} />
						</div>
					)}
				</div>
			</Container>

			{bookingIsVisible && (
				<div className="booking-container">
					<div className="pricebox-container">
						<PriceBox data={data} search={search} />
					</div>
					<Container>
						<h2 className="booking__heading">Book accommodation</h2>
						<p className="booking__title">{data.title}</p>
						<EnquiryForm asBooking={true} title={data.title} />
					</Container>
				</div>
			)}

			{!bookingIsVisible && (
				<div className="place__priceBox--mobile">
					<PriceBox data={data} search={search} />
				</div>
			)}
		</StyledAccommodationPage>
	);
}
