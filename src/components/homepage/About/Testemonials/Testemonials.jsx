import DecorativeImage from "../../../ui/DecorativeImage/DecorativeImage";
import Heading from "../../../ui/Heading/Heading";
import Paragraph from "../../../ui/Paragraph/Paragraph";
import {
	StyledTestemonials,
	StyledQuotationMarks,
} from "./testemonials.styles";
import hiker from "../../../../assets/photos/hiker.png";
import Container from "../../../layout/Container/Container";

export default function Testemonials() {
	return (
		<StyledTestemonials>
			<Container>
				<div className="pullup--xl">
					<Heading
						align="center"
						pretitle="Testemonials"
						content="What the other travelers say"
					/>
					<StyledQuotationMarks>“</StyledQuotationMarks>
					<Paragraph align="center">
						Snackwave vinyl post-ironic jean shorts ugh brunch
						organic tofu. Kinfolk forage biodiesel cornhole austin
						pinterest. Brooklyn fashion axe kinfolk live-edge
						leggings 3 wolf moon.
					</Paragraph>
				</div>
			</Container>
			<div className="pullup--lg">
				<DecorativeImage image={hiker} height="37rem" />
			</div>
		</StyledTestemonials>
	);
}
