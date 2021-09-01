import { useContext } from "react";
import Message from "../../../ui/Message/Message";
import { API_BASE_URL } from "../../../../global/constants/api";
import useAuthenticatedFetch from "../../../../hooks/useAuthenticatedFetch";
import Loader from "../../../ui/Loader/Loader";
import AuthContext from "../../../../global/contexts/AuthContext";
import { StyledMessageList } from "./messageList.styles";

export default function MessageList() {
	const [auth] = useContext(AuthContext);
	const { data, fetching, error } = useAuthenticatedFetch(
		`${API_BASE_URL}/messages`,
		auth
	);

	if (fetching) {
		return <Loader text="Loading messages" />;
	}

	if (error) {
		return <p>An error occured :(</p>;
	}

	if (auth && data) {
		return (
			<StyledMessageList>
				{data.map((message) => {
					return (
						<div className="message" key={message.id}>
							<div className="message__grid">
								<div className="message__grid--col01">
									<div className="message__grid__item">
										<p className="message__label">Name</p>
										<p className="message__value">
											{message.name}
										</p>
									</div>
									<div className="message__grid__item">
										<p className="message__label">Email</p>
										<p className="message__value">
											{message.email}
										</p>
									</div>
									<div className="message__grid__item">
										<p className="message__label">Phone</p>
										<p className="message__value">
											{message.telephone
												? message.telephone
												: "Not provided"}
										</p>
									</div>
									<div className="message__grid__item">
										<p className="message__label">
											Subject
										</p>
										<p className="message__value">
											{message.subject}
										</p>
									</div>
								</div>

								<div className="message__grid--col02">
									<div className="message__grid__item message__grid__item--span-all">
										<p className="message__label">
											Message
										</p>
										<p className="message__value">
											{message.message}
										</p>
									</div>
								</div>
							</div>
						</div>
					);
				})}
			</StyledMessageList>
		);
	} else
		return (
			<Message
				variant="danger"
				heading="You are logged out"
				message="Only users who are logged in can access the messages."
			/>
		);
}
