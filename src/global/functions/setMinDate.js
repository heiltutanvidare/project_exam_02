// Helper function that will set the minimum date
// allowed in the booking and search forms

export default function setMinDate() {
	let d = new Date();
	let month = "" + (d.getMonth() + 1);
	let day = "" + d.getDate();
	let year = d.getFullYear();

	if (month.length < 2) month = "0" + month;
	if (day.length < 2) day = "0" + day;

	return [year, month, day].join("-");
}
