import GridItem from "./GridItem/GridItem";
import experience01 from "../../../../assets/photos/experience01.jpg";
import experience02 from "../../../../assets/photos/experience02.jpg";
import experience03 from "../../../../assets/photos/experience03.jpg";
import experience04 from "../../../../assets/photos/experience04.jpg";
import experience05 from "../../../../assets/photos/experience05.jpg";
import experience06 from "../../../../assets/photos/experience06.jpg";
import { Fade } from "react-awesome-reveal";
import { StyledImageGrid } from "./imageGrid.styles";

let images = [
	experience01,
	experience02,
	experience03,
	experience04,
	experience05,
	experience06,
];

export default function ImageGrid() {
	return (
		<StyledImageGrid>
			<Fade direction="up" cascade duration="450">
				{images.map((img, i) => {
					return <GridItem image={img} key={i} />;
				})}
			</Fade>
		</StyledImageGrid>
	);
}
