import inquirer from "inquirer";
import chalk from "chalk";

import { Addition } from "./Addition.js";
import { Subtraction } from "./Subtraction.js";
import { Multiplication } from "./Multiplication.js";
import { Division } from "./Division.js";

let answer = await inquirer.prompt

([
    {
        name: "num1",
        type: "number",
        message: "Enter your First Number:"
    },
    {
        name: "num2",
        type: "number",
        message: "Enter your Second Number:"
    },
    {
        name: "Operator",
        type: "list",
        choices:["+","-","*","/"],
        message: "Select your operator: "
    },
    
    ]);
    
    // console.log(answer);

    if(answer.Operator === "+")
    {
        console.log(`The Sum of two number is = ${answer.num1 + answer.num2}`)
    }
    else if (answer.Operator === "-")
    {
        console.log(`The Difference of two number is = ${answer.num1 - answer.num2}`)
    }
    else if(answer.Operator === "*")
    {
        console.log(`The Sum of two number is = ${answer.num1 * answer.num2}`)
    }
    else if (answer.Operator === "/")
    {
        console.log(`The Difference of two number is = ${answer.num1 / answer.num2}`)
    }

