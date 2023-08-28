import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        name: "numberone",
        type: "number",
        message: "Enter your First Number:"
    },
    {
        name: "numbertwo",
        type: "number",
        message: "Enter your Second Number:"
    },
    {
        name: "Operator",
        type: "list",
        choices: ["+", "-", "*", "/"],
        message: "Select your operator: "
    },
]);
//console.log(answer);
const { numberone, numbertwo, Operator } = answer;
if (numberone && numbertwo && Operator) {
    let result = 0;
    if (answer.Operator === "+") {
        result = numberone + numbertwo;
    }
    else if (answer.Operator === "-") {
        result = numberone - numbertwo;
    }
    if (answer.Operator === "*") {
        result = numberone * numbertwo;
    }
    if (answer.Operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("Your Result is :", result);
}
else {
    console.log("Kindly enter valid input");
}
