import { StyledImagebox } from "./imagebox.styles";
import bergen from "../../../../assets/photos/bergen01.jpg";
import aalesund from "../../../../assets/photos/aalesund01.jpg";

export default function Imagebox() {
	return (
		<StyledImagebox>
			<div className="main">
				<img src={aalesund} alt="" />
			</div>
			<div className="secondary">
				<img src={bergen} alt="" />
			</div>
		</StyledImagebox>
	);
}
