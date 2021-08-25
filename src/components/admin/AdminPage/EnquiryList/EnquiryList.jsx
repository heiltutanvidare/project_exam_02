import { useContext } from "react";
import { API_BASE_URL } from "../../../../global/constants/api";
import useAuthenticatedFetch from "../../../../hooks/useAuthenticatedFetch";
import Loader from "../../../ui/Loader/Loader";
import AuthContext from "../../../../global/contexts/AuthContext";
import Message from "../../../ui/Message/Message";
import { StyledMessageList } from "../MessageList/messageList.styles";

export default function EnquiryList() {
	const [auth] = useContext(AuthContext);

	const { data, fetching, error } = useAuthenticatedFetch(
		`${API_BASE_URL}/enquiries`,
		auth
	);

	if (fetching) {
		return <Loader text="Loading enquiries" />;
	}

	if (error) {
		return <p>An error occured :(</p>;
	}

	if (auth && data) {
		return (
			<StyledMessageList>
				{data.map((enquiry) => {
					return (
						<div className="message" key={enquiry.id}>
							<div className="message__grid">
								<p className="message__label">Name</p>
								<p className="message__value">{enquiry.name}</p>
								<p className="message__label">Email</p>
								<p className="message__value">
									{enquiry.email}
								</p>
								<p className="message__label">Phone</p>
								<p className="message__value">
									{enquiry.telephone
										? enquiry.telephone
										: "Not provided"}
								</p>
								<p className="message__label">Check in</p>
								<p className="message__value">
									{enquiry.checkin}
								</p>
								<p className="message__label">Check out</p>
								<p className="message__value">
									{enquiry.checkout}
								</p>
							</div>
							<p className="message__label message__label--nonGrid">
								Interest, wants and needs
							</p>
							<p className="message__value message__value--nonGrid">
								{enquiry.message
									? enquiry.message
									: "Not provided"}
							</p>
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
				message="Only users who are logged in can access the enquiries."
			/>
		);
}