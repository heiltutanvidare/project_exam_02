import DecorativeImage from "../../../ui/DecorativeImage/DecorativeImage";
import Heading from "../../../ui/Heading/Heading";
import Paragraph from "../../../ui/Paragraph/Paragraph";
import hiker from "../../../../assets/photos/hiker.png";
import Container from "../../../layout/Container/Container";
import {
	StyledTestemonials,
	StyledQuotationMarks,
} from "./testemonials.styles";

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
						Me and my friends went hiking in the mountains around
						Bergen last christmas, and the experience of staying at
						the small, cozy cabin was way beyond anything we could
						have imagined.
					</Paragraph>
					<div className="testemonial__name">Chrissy McLaughalot</div>
				</div>
			</Container>
			<div className="pullup--lg">
				<DecorativeImage image={hiker} height="37rem" />
			</div>
		</StyledTestemonials>
	);
}
