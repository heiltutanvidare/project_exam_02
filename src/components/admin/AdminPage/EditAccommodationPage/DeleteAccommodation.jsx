import { useContext, useState } from "react";
import { useHistory } from "react-router-dom";
import AuthContext from "../../../../global/contexts/AuthContext";
import Button from "../../../ui/Button/Button";
import submitDelete from "../../../../global/functions/submitDelete";
import FullPageMessage from "../../../ui/Message/FullPageMessage";
import Message from "../../../ui/Message/Message";

export default function DeleteAccommodation({ id }) {
	const [auth] = useContext(AuthContext);
	const [deleting, setDeleting] = useState(false);
	const [deleted, setDeleted] = useState(false);
	const [deletingFailed, setDeletingFailed] = useState(false);

	const history = useHistory();

	async function handleDelete() {
		const doDelete = window.confirm(
			"Are you sure you want to delete the accommodation?"
		);
		if (doDelete) {
			window.scrollTo(0, 0);
			setDeleting(true);
			const remove = await submitDelete(id, auth);

			if (remove.success) {
				setDeleting(false);
				setDeletingFailed(false);
				setDeleted(true);
				setTimeout(() => {
					history.push("/admin");
				}, 2000);
			}
			if (remove.json.error) {
				window.scrollTo(500, 0);
				setDeleted(false);
				setDeleting(false);
				setDeletingFailed(true);
			}
		}
	}

	return (
		<>
			{deleted && (
				<FullPageMessage
					loader
					variant="success"
					heading="Deleted"
					message="Accommodation has been deleted. Redirecting you to the admin page..."
				/>
			)}
			{deletingFailed && (
				<Message
					variant="danger"
					heading="Error"
					message="We are sorry but we could not delete the accommotdation."
				/>
			)}
			{deleting && (
				<FullPageMessage
					loader
					variant="waiting"
					heading="Deleting"
					message="Please wait while we delete the accommodation"
				/>
			)}
			<Button event={handleDelete} variant="danger">
				Delete the stuff
			</Button>
		</>
	);
}
