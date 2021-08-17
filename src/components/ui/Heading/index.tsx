import { StyledHeading } from "./heading.styles";
import Pretitle from "../Pretitle";

interface Props {
	content: string;
	pretitle?: string;
	align?: string;
	heroTitle?: boolean;
}

export default function Heading({
	content,
	pretitle,
	align = "left",
	heroTitle = false,
}: Props) {
	return (
		<>
			{pretitle && <Pretitle align={align}>{pretitle}</Pretitle>}
			<StyledHeading align={align} heroTitle={heroTitle}>
				{content}
			</StyledHeading>
		</>
	);
}
