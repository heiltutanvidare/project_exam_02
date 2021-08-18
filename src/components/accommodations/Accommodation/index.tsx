import { StyledAccommodation } from "./accommodation.styles";

interface Props {
	price: number;
	title: string;
	type: string;
	image: string;
}

export default function Accommodation({ price, title, type, image }: Props) {
	return (
		<StyledAccommodation>
			<img className="accommodation__image" src={image} alt={title} />
			<p className="accommodation__type">{type}</p>
			<p className="accommodation__description">{title}</p>
			<p className="accommodation__price">
				<span>{price}</span> / night
			</p>
			<p className="accommodation__price--total">4.243$ total</p>
		</StyledAccommodation>
	);
}
