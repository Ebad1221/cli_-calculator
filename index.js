#! /usr/bin/env node
import inquirer from "inquirer";
const num = await inquirer.prompt([
    { message: "Enter 1st number", type: "number", name: "first" },
    { message: "Enter 2nd number", type: "number", name: "second" },
    {
        message: "enter the operation",
        name: "operation",
        type: "list",
        choices: ["addition", "subtraction", "multiplication", "division"],
    },
]);
if (num.operation === "addition") {
    console.log(`the answer is : ${num.first + num.second}`);
}
else if (num.operation === "subtraction") {
    console.log(`the answer is : ${num.first - num.second}`);
}
else if (num.operation === "multiplication") {
    console.log(`the answer is : ${num.first * num.second}`);
}
else {
    console.log(`the answer is : ${num.first / num.second}`);
}
