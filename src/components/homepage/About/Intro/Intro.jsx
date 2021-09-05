import Heading from "../../../ui/Heading/Heading";
import bergen from "../../../../assets/photos/bergen01.jpg";
import aalesund from "../../../../assets/photos/aalesund01.jpg";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";
import { StyledIntro } from "./intro.styles";

export default function Intro() {
	const fadeInFromLeft = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;
	const fadeInFromRight = keyframes`
  from {
    opacity: 0;
    transform: translate3d(200px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

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
				<Reveal keyframes={fadeInFromLeft}>
					<img src={aalesund} alt="" />
				</Reveal>
			</div>
			<div className="intro__images intro__images--secondary">
				<Reveal keyframes={fadeInFromRight}>
					<img src={bergen} alt="" />
				</Reveal>
			</div>
		</StyledIntro>
	);
}
