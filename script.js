
function changePlan(type) {
    const amounts = document.querySelectorAll(".amount");
    const periods = document.querySelectorAll(".period");

    amounts.forEach(amount => {
        amount.textContent = amount.dataset[type];
    });

    periods.forEach(period => {
        period.textContent =
            type === "monthly" ? "/month" : "/year";
    });

    document.getElementById("monthly")
        .classList.toggle("active", type === "monthly");

    document.getElementById("yearly")
        .classList.toggle("active", type === "yearly");
}

function selectPlan(plan) {
    alert("You selected the " + plan + " Plan!");
}
