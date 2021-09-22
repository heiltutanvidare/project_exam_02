import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Used by React Router in App.JSX to improve user experience
// when navigating the site, by scrolling to the top
// of the viewport when changing pages.
export default function ScrollToTop() {
	const { pathname } = useLocation();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return null;
}
