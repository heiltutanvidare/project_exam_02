import Heading from "../../ui/Heading/Heading";
import Pretitle from "../../ui/Pretitle/Pretitle";
import SearchBox from "../../search/SearchBox/SearchBox";
import { Fade } from "react-awesome-reveal";
import { StyledHero } from "./hero.styles";

export default function Hero() {
	return (
		<StyledHero>
			<div className="overlay"></div>
			<div className="inner max-width">
				<Fade cascade>
					<div>
						<Heading
							align="center"
							content={`Experience Vestlandet`}
							heroTitle
						/>
					</div>
					<div>
						<Pretitle align="center" color="var(--clr-drk-50)">
							Find a place to stay
						</Pretitle>
						<div className="pullup">
							<SearchBox />
						</div>
					</div>
				</Fade>
			</div>
		</StyledHero>
	);
}
