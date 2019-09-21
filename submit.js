//Calculate how many paychecks it would take to save for goal after taxes, but before any expenses
function howMuchDoYouWantToSaveBeforeDeductibles() {
	const pay = document.getElementById("check").value //this is how much a person gets per paycheck
	const goal = document.getElementById("g_amount").value //this is how much you want to save up
	const save = document.getElementById("save").value //how much you want to save per paycheck
	const howmanychecks = (pay - goal) / save //how many paychecks until goal is reached
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
    const typedate = document.getElementById("dateType").value //this is how often I select my expenses to be paid
    const checkType = document.getElementById("checkType").value //this is how often I get payed
    console.log(typedate);
    console.log(checkType);
    let totaldeductions = document.getElementById("deductibles").value
    console.log(totaldeductions + " before if statements");
    if(checkType == "weekly") {
    	if(typedate == "week") 
    		console.log(totaldeductions + " NO OPERATIONS");
    	else if(typedate == "month") {
    		totaldeductions = totaldeductions / 4;
    		console.log(totaldeductions + " BREAK");
    	}
    }

    if(checkType == "bi-weekly") {
    	if(typedate == "week") {
    		totaldeductions = totaldeductions * 2;
    		console.log(totaldeductions);
    	}
    	else if(typedate == "month") {
    		totaldeductions = totaldeductions / 2;
    		console.log(totaldeductions);
    	}
    }

    if(checkType == "monthly") {
    	if(typedate == "week") {
    		totaldeductions = totaldeductions * 4;
    		console.log(totaldeductions);
    	}
    	if(typedate == "month")
    		console.log(totaldeductions + " NO OPERATIONS");
    }
}