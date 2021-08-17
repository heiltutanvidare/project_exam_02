import { StyledHeading } from "./heading.styles";
import Pretitle from "../Pretitle";

interface Props {
	content: string;
	pretitle?: string;
}

export default function Heading({ content, pretitle }: Props) {
	return (
		<>
			{pretitle && <Pretitle>{pretitle}</Pretitle>}
			<StyledHeading>{content}</StyledHeading>
		</>
	);
}
