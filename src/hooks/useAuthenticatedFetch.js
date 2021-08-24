import { useEffect, useState } from "react";

export default function useAuthenticatedFetch(url, token = null) {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		const options = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		async function fetchData() {
			try {
				const res = await fetch(url, options);
				const json = await res.json();
				setData(json);
			} catch (error) {
				console.error(error);
				setError(error.toString());
			} finally {
				setFetching(false);
			}
		}
		fetchData();
	}, [url, token]);
	return { data, fetching, error };
}
