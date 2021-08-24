import { API_BASE_URL } from "../../../../global/constants/api";
import useFetch from "../../../../hooks/useFetch";
import Loader from "../../../ui/Loader/Loader";
import { StyledMessageList } from "./messageList.styles";

export default function MessageList() {
	const { data, fetching, error } = useFetch(`${API_BASE_URL}/messages`);

	if (fetching) {
		return <Loader />;
	}

	if (error) {
		return <p>An error occured :(</p>;
	}

	if (data) {
		console.log(data);
		return (
			<StyledMessageList>
				{data.map((message) => {
					return (
						<div className="message" key={message.id}>
							<div className="message__grid">
								<p className="message__label">Name</p>
								<p className="message__value">{message.name}</p>
								<p className="message__label">Email</p>
								<p className="message__value">
									{message.email}
								</p>
								<p className="message__label">Phone</p>
								<p className="message__value">
									{message.telephone
										? message.telephone
										: "Not provided"}
								</p>
								<p className="message__label">Subject</p>
								<p className="message__value">
									{message.subject}
								</p>
							</div>
							<p className="message__label message__label--nonGrid">
								Message
							</p>
							<p className="message__value message__value--nonGrid">
								{message.message}
							</p>
						</div>
					);
				})}
			</StyledMessageList>
		);
	}
}
