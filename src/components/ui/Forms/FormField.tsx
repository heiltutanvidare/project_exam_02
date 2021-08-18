import {
	StyledLabel,
	StyledInput,
	StyledFormField,
	StyledTextArea,
} from "./form.styles";

interface Props {
	input: string;
	required?: boolean;
	type?: string;
}

export default function FormField({ required = false, input, type }: Props) {
	if (type === "textarea") {
		return (
			<StyledFormField>
				<StyledLabel>
					{input} {required ? "(required)" : ""}
				</StyledLabel>
				<StyledTextArea
					rows="4"
					placeholder={`Enter your ${input.toLowerCase()}`}
				></StyledTextArea>
			</StyledFormField>
		);
	} else {
		return (
			<StyledFormField>
				<StyledLabel>
					{input} {required ? "(required)" : ""}
				</StyledLabel>
				<StyledInput
					placeholder={`Enter your ${input.toLowerCase()}`}
				></StyledInput>
			</StyledFormField>
		);
	}
}
