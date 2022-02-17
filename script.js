//Capture Input value
function getInputValue(inputId) {
    const inputField = document.querySelector(inputId);
    const inputValue = parseInt(inputField.value);
    return inputValue;
}

//Gets Total Spent Amount
function getTotalSpend() {
    const forFood = getInputValue("#input-food");
    const forRent = getInputValue("#input-rent");
    const forTransport = getInputValue("#input-transport");
    const totalSpendField = document.getElementById("total-spend");
    const totalSpending = forFood + forRent + forTransport;
    if (
        isNaN(forFood) ||
        isNaN(forRent) ||
        isNaN(forTransport) ||
        forFood < 0 ||
        forRent < 0 ||
        forTransport < 0
    ) {
        alert("Hewwo~ You need to enter a valid amount hehe");
        totalSpendField.innerText = "";
    } else {
        return totalSpending;
    }
}

document.getElementById("calculate-btn").addEventListener("click", () => {
    const totalEarning = getInputValue("#input-income");
    const totalSpending = getTotalSpend();
    //Error Handling for Negative Value and Earning < Spend
    if (totalEarning <= 0) {
        alert("Please enter a valid amount");
    } else if (isNaN(totalEarning)) {
        alert('Please enter your Total Income first!')
    } else if (totalEarning < totalSpending) {
        alert("You can't spend more than you Earn! DUH!!");
    } else {
        if (typeof totalSpending !== "number") {
        } else {
            //Updating total spending to the Total Spending Field
            const totalSpendField = document.getElementById("total-spend");
            totalSpendField.innerText = totalSpending;

            //Updating New balance to the New Balance Field
            const newBalance = totalEarning - totalSpending;
            const newBalanceField = document.getElementById("new-balance");
            newBalanceField.innerText = newBalance;
        }
    }
});

document.getElementById("saving-button").addEventListener("click", () => {
    //Gets The New Balance
    const newBalanceField = document.getElementById("new-balance");
    const newBalance = parseInt(newBalanceField.innerText);
    const totalEarning = getInputValue("#input-income");
    const totalSpendField = document.getElementById("total-spend");
    const totalSpending = parseInt(totalSpendField.innerText);

    //Updates the saving amount
    const savingPercent = getInputValue("#saving-percent");
    const savingAmount = totalEarning * (savingPercent / 100);

    // Updates Remaining Balance
    const remainingBalance = newBalance - savingAmount;

    //Error handling for Saving Button and Saving Amount
    if (savingPercent < 0) {
        alert("Please enter a positive amount you want to save");
    } else if (totalEarning < savingAmount) {
        alert("HEY!! You can't save more than you Earn");
    } else if (
        isNaN(totalEarning) ||
        isNaN(savingPercent) ||
        isNaN(totalSpending)
    ) {
        alert("Please fill the above field");
    } else if (remainingBalance < 0) {
        alert("Sorry, You don't have enough balance to save");
    } else {
        const savingField = document.getElementById("total-save");
        savingField.innerText = savingAmount;
        const remainingBalanceField = document.getElementById("remaining-balance");
        remainingBalanceField.innerText = remainingBalance;
    }

    //Clears out Input Field
    const input = Array.from(document.querySelectorAll("input"));
    input.forEach((e) => {
        e.value = "";
    });
});