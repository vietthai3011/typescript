"use strict";
function calculatorInvestment(data) {
    const { initialAmount, annualContribution, expectedRetune, duration } = data;
    if (initialAmount < 0)
        return "Initial investment amount must be at least zero.";
    if (duration <= 0)
        return "No valid amound of year provided.";
    if (expectedRetune < 0)
        return "Expected return must be at least zero.";
    let total = initialAmount;
    let totalContribution = 0;
    let totalInterestEarned = 0;
    let annualResult = [];
    for (let i = 0; i < duration; i++) {
        total = total * (1 + expectedRetune);
        totalInterestEarned = total - totalContribution - initialAmount;
        totalContribution = totalContribution + annualContribution;
        total = total + annualContribution;
        annualResult.push({
            year: `Year ${i + 1}`,
            totalAmount: total,
            totalContribution: totalContribution,
            totalInterestEarned,
        });
    }
    return annualResult;
}
function printResults(results) {
    if (typeof results === "string") {
        console.log(results);
        return;
    }
    results.forEach(yearnAndResult => {
        console.log(yearnAndResult.year);
        console.log(`Total: ${yearnAndResult.totalAmount.toFixed(0)}`);
        console.log(`Total Contribution: ${yearnAndResult.totalContribution.toFixed(0)}`);
        console.log(`Total Interest Earned: ${yearnAndResult.totalInterestEarned.toFixed(0)}`);
        console.log("------------------------------");
    });
}
const investmentData = {
    initialAmount: 5000,
    annualContribution: 500,
    expectedRetune: 0.08,
    duration: 10,
};
const results = calculatorInvestment(investmentData);
printResults(results);
