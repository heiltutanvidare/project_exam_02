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
					Holidaze are here to help visitors to «Vestlandet» (Western
					Norway) find accommodations that suit their budget and their
					needs. If you are travelin to the area of Bergen and its
					surroundings, you can get the chance to experience the best
					of the area – while stayig at one of the many greate hotels,
					apartments, cabins etc, provided by our great and passionate
					comunity of accommodation owners.
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
