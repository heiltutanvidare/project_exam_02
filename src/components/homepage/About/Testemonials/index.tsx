import DecorativeImage from "../../../ui/DecorativeImage";
import Heading from "../../../ui/Heading";
import Paragraph from "../../../ui/Paragraph";
import { StyledTestemonials } from "./testemonials.styles";
import hiker from "../../../../assets/photos/hiker.png";
import Container from "../../../layout/Container";

export default function Testemonials() {
	return (
		<StyledTestemonials>
			<Container>
				<div className="pullup">
					<Heading
						align="center"
						pretitle="Testemonials"
						content="What other travelers say"
					/>
					<Paragraph align="center">
						Snackwave vinyl post-ironic jean shorts ugh brunch
						organic tofu. Kinfolk forage biodiesel cornhole austin
						pinterest. Brooklyn fashion axe kinfolk live-edge
						leggings 3 wolf moon.
					</Paragraph>
				</div>
			</Container>
			<DecorativeImage image={hiker} height="37rem" />
		</StyledTestemonials>
	);
}
