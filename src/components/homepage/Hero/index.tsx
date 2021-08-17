import { StyledHero } from "./hero.styles";
import Heading from "../../ui/Heading";
import Pretitle from "../../ui/Pretitle";

export default function Hero() {
	return (
		<StyledHero>
			<div className="overlay"></div>
			<div className="inner max-width">
				<Heading content="Western Norway the way it’s meant to be experienced"></Heading>
				<Pretitle>Find a place to stay</Pretitle>
			</div>
		</StyledHero>
	);
}
