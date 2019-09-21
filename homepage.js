function howMuchDoYouWantToSave() {
	const pay = document.getElementById("paycheck").value; //this is how much a person gets per paycheck
    const goal = document.getElementById("g_amount").value; //this is how much you want to save
    const save = document.getElementById("save").value; //how much you want to save per paycheck
    const howmanychecks = Math.abs((pay - goal) / save); //how many paychecks until goal is reached
    document.getElementById("howlong").innerHTML = howmanychecks + " paychecks";
    console.log(howmanychecks);
    window.location.href = "outputpage.html";
}
