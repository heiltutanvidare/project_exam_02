import React, { useState } from "react";

const BookingContext = React.createContext([null, () => {}]);

export const BookingContextProvider = ({ children }) => {
	const [bookingIsVisible, setBookingIsVisible] = useState(false);
	return (
		<BookingContext.Provider
			value={[bookingIsVisible, setBookingIsVisible]}
		>
			{children}
		</BookingContext.Provider>
	);
};

export default BookingContext;
