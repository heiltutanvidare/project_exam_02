import Heading from "../../../ui/Heading/Heading";
import bergen from "../../../../assets/photos/bergen01.jpg";
import aalesund from "../../../../assets/photos/aalesund01.jpg";
import { Slide } from "react-awesome-reveal";
import { StyledIntro } from "./intro.styles";

export default function Intro() {
	return (
		<StyledIntro>
			<div className="intro__text">
				<Heading
					align="left"
					pretitle="We are Holidaze"
					content="Rooms for rent on the Norewgian coast – safe and affordable"
				/>
				<p>
					Holidaze is here to assist tourists to «Vestlandet» (Western
					Norway) in finding lodging that fits their budget and needs.
					If you are visiting Bergen and its vicinities, you can stay
					at one of the many wonderful hotels, apartments, cabins, and
					other accommodations supplied by our wonderful and dedicated
					community of accommodation owners.
				</p>
			</div>
			<div className="intro__images intro__images--main">
				<Slide direction="left" duration="450">
					<img src={aalesund} alt="" />
				</Slide>
			</div>
			<div className="intro__images intro__images--secondary">
				<Slide direction="right" duration="450">
					<img src={bergen} alt="" />
				</Slide>
			</div>
		</StyledIntro>
	);
}
