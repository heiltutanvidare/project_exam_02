import { useRef } from "react";
import Container from "../../layout/Container/Container";
import Button from "../../ui/Button/Button";
import Heading from "../../ui/Heading/Heading";
import Paragraph from "../../ui/Paragraph/Paragraph";
import { StyledAbout } from "./about.styles";
import Carousel from "./Carousel/Carousel";
import Contact from "./Contact/Contact";
import Imagebox from "./Imagebox/Imagebox";
import ImageGrid from "./ImageGrid/ImageGrid";
import Testemonials from "./Testemonials/Testemonials";
import scrollToElement from "../../../global/functions/scrollToElement";

export default function About() {
	// Set up the contact form container as a ref
	const contactRef = useRef(null);

	return (
		<StyledAbout>
			<Container>
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
				<Imagebox />
				<Heading
					align="left"
					pretitle="base of operations"
					content="We help you stay comfortable while you explore"
				/>
				<p>
					Bergen is the gateway to Norway, with its fjords and
					mountains, its fairytale colour, and a close proximity to
					some of the world's most beautiful attractions. Bergen
					offers fantastic hiking trails through the majestic nature,
					opportunities for more active holidays like biking or
					kayaking, cozy cafés on every corner with good scones and
					coffee, and of course the city centre, where you can find
					museums like Bryggens Museum or Marine-Museum.
				</p>
				<Button
					variant="outlined"
					event={() => scrollToElement(contactRef)}
				>
					Contact us
				</Button>
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
