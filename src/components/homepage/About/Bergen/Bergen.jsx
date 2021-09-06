import Heading from "../../../ui/Heading/Heading";
import Button from "../../../ui/Button/Button";
import scrollToElement from "../../../../global/functions/scrollToElement";
import { Slide } from "react-awesome-reveal";
import { StyledBergen } from "./bergens.styles";

export default function Bergen({ scrollTarget }) {
	return (
		<StyledBergen>
			<div className="left">
				<Slide direction="left">
					<Heading
						align="left"
						pretitle="base of operations"
						content="We help you stay comfortable while you explore"
					/>
				</Slide>
			</div>
			<Slide direction="right" cascade={false}>
				<div className="right">
					<p>
						Bergen is the gateway to Norway, with its fjords and
						mountains, its fairytale colour, and a close proximity
						to some of the world's most beautiful attractions.
						Bergen offers fantastic hiking trails through the
						majestic nature, opportunities for more active holidays
						like biking or kayaking, cozy cafés on every corner with
						good scones and coffee, and of course the city centre,
						where you can find museums like Bryggens Museum or
						Marine-Museum.
					</p>
					<Button
						variant="outlined"
						event={() => scrollToElement(scrollTarget)}
					>
						Contact us
					</Button>
				</div>
			</Slide>
		</StyledBergen>
	);
}
