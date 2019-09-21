// function HowMuchAPayCheck() {
// 	const x = document.getElementById("check").value
// 	console.log(x);
// 	window.alert(x);
// }

function howMuchDoYouWantToSave() {
	const pay = document.getElementById("check").value //this is how much a person gets per paycheck
	const goal = document.getElementById("g_amount").value //this is how much you want to save up
	const save = document.getElementById("save").value //how much you want to save per paycheck
	const howmanychecks = (pay - goal) / save //how many paychecks until goal is reached
	document.getElementById("howlong").innerHTML= howmanychecks + " paychecks";
	console.log(howmanychecks);
}