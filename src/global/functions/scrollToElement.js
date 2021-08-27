// Scroll the viewport to whatever element is passed in,
// and scroll to top if null is passed in.

function scrollToElement(refElement) {
	window.scrollTo({
		top: refElement?.current.offsetTop ? refElement.current.offsetTop : 0,
		behavior: "smooth",
	});
}

export default scrollToElement;
