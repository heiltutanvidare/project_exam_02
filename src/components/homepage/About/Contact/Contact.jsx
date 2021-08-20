import Button from "../../../ui/Button/Button";
import FormField from "../../../ui/Forms/FormField";
import Heading from "../../../ui/Heading/Heading";
import { StyledContact } from "./contact.styles";

export default function Contact() {
	return (
		<StyledContact>
			<Heading
				align="center"
				content="Send us a message"
				pretitle="Lets chat"
			/>
			<form>
				<FormField input="First name" required />
				<FormField input="Last name" required />
				<FormField input="Email address" required />
				<FormField input="Telephone" />
				<FormField input="Message" type="textarea" />
				<Button variant="outlined" fullwidth>
					Send it
				</Button>
			</form>
		</StyledContact>
	);
}
