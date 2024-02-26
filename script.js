const billAmount = document.querySelector("#bill-amount");
const cashGiven = document.querySelector("#cash-given");
const checkButton = document.querySelector("#check-button");
const message = document.querySelector("#error-message");
const availableNotes = [2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes")

checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if (billAmount.value > 0) { // if 12 rupess given
        if (cashGiven.value >= billAmount.value) { // 2022>12 => true
            const amountToBeReturned = cashGiven.value - billAmount.value; // 2022-12 = 2010
            calculateChange(amountToBeReturned);
        } else {
            showMessage("The Cash Provide Should atleast Be Equal to Bill Amount");
        }
    } else {
        showMessage("Invalid Bill Amount");
    }
});

function calculateChange(amountToBeReturned) {
    // Go overall the available
    for (let i = 0; i < availableNotes.length; i++) {
        //no of noted need for the domination
        const numberofNotes = Math.trunc(amountToBeReturned / availableNotes[i]);
        //2010 / 2000 = 1 || 10/500 = 0

        //Amount Left after the number of notes needed
        // amountToBeReturned %= availableNotes[i];
        amountToBeReturned = amountToBeReturned % availableNotes[i];
        //2010 % 2000 = 10 || 10%500 = 10

        // updating the no of notes in the table for the current amount
        noOfNotes[i].innerText = numberofNotes;
    }
}

function hideMessage() {
    message.style.display = "none";
}

function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
}


document.getElementById("check_button").addEventListener("click", function () {
    var billAmount = parseFloat(document.getElementById("bill_amount").value);
    var cashGiven = parseFloat(document.getElementById("cash_given").value);

    if (isNaN(billAmount) || isNaN(cashGiven)) {
        document.getElementById("error_message").innerText = "Please enter valid numbers.";
        return;
    }

    var changeAmount = cashGiven - billAmount;
    if (changeAmount < 0) {
        document.getElementById("error_message").innerText = "Cash given is less than bill amount.";
        return;
    }

    document.getElementById("error_message").innerText = "";

    var notes = [2000, 500, 100, 20, 10, 5, 1];
    var noteCounts = [];
    for (var i = 0; i < notes.length; i++) {
        noteCounts.push(Math.floor(changeAmount / notes[i]));
        changeAmount %= notes[i];
    }

    var noteElements = document.querySelectorAll(".no_of_notes");
    for (var i = 0; i < noteElements.length; i++) {
        noteElements[i].innerText = noteCounts[i];
    }
});








document.getElementById("check_button").addEventListener("click", function () {
    var billAmount = parseFloat(document.getElementById("bill_amount").value);
    var cashGiven = parseFloat(document.getElementById("cash_given").value);

    if (isNaN(billAmount) || isNaN(cashGiven)) {
        document.getElementById("error_message").innerText = "Please enter valid numbers.";
        return;
    }

    var changeAmount = cashGiven - billAmount;
    if (changeAmount < 0) {
        document.getElementById("error_message").innerText = "Cash given is less than bill amount.";
        return;
    }

    document.getElementById("error_message").innerText = "";

    var notes = [2000, 500, 100, 20, 10, 5, 1];
    var noteCounts = [];
    for (var i = 0; i < notes.length; i++) {
        noteCounts.push(Math.floor(changeAmount / notes[i]));
        changeAmount %= notes[i];
    }

    var noteElements = document.querySelectorAll(".no_of_notes");
    for (var i = 0; i < noteElements.length; i++) {
        noteElements[i].innerText = noteCounts[i];
    }

    // Calculate and display balance
    var balance = cashGiven - billAmount - notes.reduce((acc, note, index) => acc + noteCounts[index] * note, 0);
    document.getElementById("balance_message").innerText = "Balance: " + balance.toFixed(2);
});