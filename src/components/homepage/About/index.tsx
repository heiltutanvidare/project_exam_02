import Container from "../../layout/Container";
import Button from "../../ui/Button";
import Heading from "../../ui/Heading";
import { StyledAbout } from "./about.styles";
import Imagebox from "./Imagebox";

export default function About() {
	return (
		<StyledAbout>
			<Container>
				<Heading
					align="left"
					pretitle="We are Holidaze"
					content="Rooms for rent on the Norewgian coast – safe and affordable"
				/>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quo, culpa reiciendis quibusdam dolorem accusamus
					praesentium quia quos molestiae iure asperiores voluptates
					iusto maiores assumenda officia voluptatem alias cupiditate
					cum facilis explicabo debitis. Vero neque maiores natus
					corporis delectus a consequuntur tenetur sapiente cumque
					nulla totam, odit odio perferendis quae omnis accusantium
					est!
				</p>
				<Button variant="filled">Send an inquiry</Button>
				<Imagebox />
				<Heading
					align="left"
					pretitle="base of operations"
					content="We help you stay comfortable while you explore"
				/>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit.
					Quo, culpa reiciendis quibusdam dolorem accusamus
					praesentium quia quos molestiae iure asperiores voluptates
					iusto maiores assumenda officia voluptatem alias cupiditate
					cum facilis explicabo debitis. Vero neque maiores natus
					corporis delectus a consequuntur tenetur sapiente cumque
					nulla totam, odit odio perferendis quae omnis accusantium
					est!
				</p>
				<Button variant="outlined">Contact us</Button>
			</Container>
		</StyledAbout>
	);
}
