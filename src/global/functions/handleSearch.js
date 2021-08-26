export default function handleSearch(e) {
	const location = e.target[0].value;
	const checkIn = e.target[1].value;
	const checkOut = e.target[2].value;

	const checkInDate = new Date(checkIn);
	const checkOutDate = new Date(checkOut);
	const differenceInTime = checkOutDate.getTime() - checkInDate.getTime();
	const differenceInDays = differenceInTime / (1000 * 3600 * 24);

	return {
		location: location,
		checkIn,
		checkOut,
		days: differenceInDays || 1,
	};
}
