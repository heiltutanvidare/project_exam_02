import GridItem from "./GridItem/GridItem";
import { StyledImageGrid } from "./imageGrid.styles";
import experience01 from "../../../../assets/photos/experience01.jpg";
import experience02 from "../../../../assets/photos/experience02.jpg";
import experience03 from "../../../../assets/photos/experience03.jpg";
import experience04 from "../../../../assets/photos/experience04.jpg";
import experience05 from "../../../../assets/photos/experience05.jpg";
import experience06 from "../../../../assets/photos/experience06.jpg";

export default function ImageGrid() {
	return (
		<StyledImageGrid>
			<GridItem image={experience01} />
			<GridItem image={experience02} />
			<GridItem image={experience03} />
			<GridItem image={experience04} />
			<GridItem image={experience05} />
			<GridItem image={experience06} />
		</StyledImageGrid>
	);
}
