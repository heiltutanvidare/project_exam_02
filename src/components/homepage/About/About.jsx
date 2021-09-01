import { useRef } from "react";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import { StyledAbout } from "./about.styles";
import Carousel from "./Carousel/Carousel";
import Contact from "./Contact/Contact";
import ImageGrid from "./ImageGrid/ImageGrid";
import Testemonials from "./Testemonials/Testemonials";
import scrollToElement from "../../../global/functions/scrollToElement";
import Intro from "./Intro/Intro";
import Bergen from "./Bergen/Bergen";

export default function About() {
	// Set up the contact form container as a ref
	const contactRef = useRef(null);

	return (
		<StyledAbout>
			<Container>
				<Intro />
				<Bergen scrollTarget={contactRef} />
			</Container>
			<Carousel />
			<Container>
				<Heading
					align="center"
					pretitle="Experiences"
					content="Just enjoy it!"
				/>
				<Paragraph align="center">
					Superb geographical location, picture-book fjords, wonderful
					mountains, a thousand lakes and countless islands. We love
					this peninsula amidst all of nature's splendour. And we're
					looking forward to welcoming you here!
				</Paragraph>
				<Button
					variant="filled"
					align="center"
					event={() => scrollToElement(null)}
				>
					Find a place to stay
				</Button>
				<ImageGrid />
			</Container>
			<Testemonials />
			<Container>
				<div className="contactRef--container" ref={contactRef}>
					<Contact />
				</div>
			</Container>
		</StyledAbout>
	);
}
