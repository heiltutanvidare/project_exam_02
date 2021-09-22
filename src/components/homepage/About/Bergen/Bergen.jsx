import Heading from "../../../ui/Heading/Heading";
import Button from "../../../ui/Button/Button";
import scrollToElement from "../../../../global/functions/scrollToElement";
import { Slide } from "react-awesome-reveal";
import { StyledBergen } from "./bergen.styles";

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
						Bergen, with its fjords and mountains, fantasy color,
						and closeness to some of the world's most stunning
						sights, is the entryway to Norway. Bergen provides
						wonderful hiking paths through magnificent environment,
						possibilities for more active vacations such as
						bicycling or kayaking, nice cafés on every corner
						serving delicious scones and coffee, and, of course, the
						city center, which has museums such as Bryggens Museum
						and the Marine-Museum.
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
