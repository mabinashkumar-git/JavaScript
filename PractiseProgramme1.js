// Create an array called expenses that contains at least 5 different expense amounts
// Write code to calculate the total expenses
// Write code to find the highest expense
// Write code to find the lowest expense

var expenses = [300, 200, 100, 500, 400];
console.log("expenses -:", expenses);

var sum=0
for (var i = 0; i < expenses.length; i++) {
    sum = sum + expenses[i];
}
console.log("Total expenses -:", sum);

expenses.sort((a,b) => a-b)
console.log("expenses -:", expenses)

console.log("Highest expense -:", expenses[expenses.length-1])
console.log("Lowest expense -:", expenses[0])
