import { StyledHero } from "./hero.styles";
import Heading from "../../ui/Heading/Heading";
import Pretitle from "../../ui/Pretitle/Pretitle";

export default function Hero() {
	return (
		<StyledHero>
			<div className="overlay"></div>
			<div className="inner max-width">
				<Heading
					align="center"
					content="Western Norway the way it’s meant to be experienced"
					heroTitle
				></Heading>
				<Pretitle align="center" color="var(--clr-drk-50)">
					Find a place to stay
				</Pretitle>
			</div>
		</StyledHero>
	);
}
