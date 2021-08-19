export default function handleSearch(e: React.SyntheticEvent) {
	e.preventDefault();

	const target = e.target as typeof e.target & {
		location: { value: string };
		guests: { value: number };
		checkin: { value: string };
		checkout: { value: string };
	};
	const location = target.location.value;
	const guests = target.guests.value;
	const checkIn = target.checkin.value;
	const checkOut = target.checkout.value;

	const checkInDate: Date = new Date(checkIn);
	const checkOutDate: Date = new Date(checkOut);
	const differenceInTime: number =
		checkInDate.getTime() - checkOutDate.getTime();
	const differenceInDays: number = differenceInTime / (1000 * 3600 * 24);

	console.log("Wants to stay at: " + location);
	console.log("Number of guests: " + guests);
	console.log("Arrives at: " + checkIn);
	console.log("Leaves at: " + checkOut);
	console.log("They want to stay: " + differenceInDays + " days");
}
