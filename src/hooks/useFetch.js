import { useEffect, useState } from "react";

export default function useFetch(url) {
	const [data, setData] = useState([]);
	const [fetching, setFetching] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		async function fetchData() {
			try {
				const res = await fetch(url);
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
	}, [url]);
	return { data, fetching, error };
}
