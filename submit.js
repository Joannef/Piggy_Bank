//Calculate how many paychecks it would take to save for goal after taxes, but before any expenses
function howMuchDoYouWantToSaveBeforeDeductibles() {
	const pay = document.getElementById("check").value //this is how much a person gets per paycheck
	const goal = document.getElementById("g_amount").value //this is how much you want to save up
	const save = document.getElementById("save").value //how much you want to save per paycheck
	const howmanychecks = Math.abs((pay - goal))/ save //how many paychecks until goal is reached
	document.getElementById("howlong").innerHTML = howmanychecks + " paychecks";
	//console.log(howmanychecks);
}

// //How much deductions depending on day, week, or month
// function howMuchDeductiblesPerX() {
// 	const typedate = document.getElementById("dateType").value
// 	console.log(typedate);
// 	const totaldeductions = document.getElementById("deductibles").value
// 	console.log(totaldeductions);
// 	// if (typedate === )
// }

function howMuchDeductiblesPerX() {
	const pay = document.getElementById("check").value //this is how much a person gets per paycheck
	const save = document.getElementById("save").value //how much you want to save per paycheck
    const typedate = document.getElementById("dateType").value //this is how often I select my expenses to be paid
    const checkType = document.getElementById("checkType").value //this is how often I get payed
    var total;
    console.log(typedate);
    console.log(checkType);
    let totaldeductions = document.getElementById("deductibles").value
    console.log(totaldeductions + " before if statements");
    if(checkType == "weekly") {
    	if(typedate == "week") {
    		total = pay-totaldeductions-save;
    		console.log(total);
    	}
    	else if(typedate == "month") {
    		totaldeductions = totaldeductions / 4;
    		total = pay-totaldeductions-save;
    		console.log(total);
    	}
    }

    if(checkType == "bi-weekly") {
    	if(typedate == "week") {
    		totaldeductions = totaldeductions * 2;
    		total = pay-totaldeductions-save;
    		console.log(total);
    	}
    	else if(typedate == "month") {
    		totaldeductions = totaldeductions / 2;
    		total = pay-totaldeductions-save;
    		console.log(total);
    	}
    }

    if(checkType == "monthly") {
    	if(typedate == "week") {
    		totaldeductions = totaldeductions * 4;
    		total = pay-totaldeductions-save;
    		console.log(total);
    	}
    	if(typedate == "month") {
    		total = pay-totaldeductions-save;
    		console.log(total);
    	}
    }

}