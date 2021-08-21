import { StyledHero } from "./hero.styles";
import Heading from "../../ui/Heading/Heading";
import Pretitle from "../../ui/Pretitle/Pretitle";
import SearchBox from "../../search/SearchBox/SearchBox";

export default function Hero() {
	return (
		<StyledHero>
			<div className="overlay"></div>
			<div className="inner max-width">
				<Heading
					align="center"
					content="Rest a bit before your next amazing adventure"
					heroTitle
				></Heading>
				<div>
					<Pretitle align="center" color="var(--clr-drk-50)">
						Find a place to stay
					</Pretitle>
					<div className="pullup">
						<SearchBox />
					</div>
				</div>
			</div>
		</StyledHero>
	);
}
