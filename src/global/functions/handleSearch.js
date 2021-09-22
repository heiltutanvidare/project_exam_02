// Function to handle the search term the user will input
export default function handleSearch(e) {
	const title = e.target[0].value;
	const checkIn = e.target[1].value;
	const checkOut = e.target[2].value;

	// Calculate the number of days if check in and check out dates are selected
	const checkInDate = new Date(checkIn);
	const checkOutDate = new Date(checkOut);
	const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
	const differenceInDays = differenceInTime / (1000 * 3600 * 24);

	return {
		title,
		checkIn,
		checkOut,
		days: differenceInDays || 1,
	};
}
