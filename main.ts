import inquirer from "inquirer";

import { Addition } from "./Addition.js";
import { Subtraction } from "./Subtraction.js";
import { Multiplication } from "./Multiplication.js";
import { Division } from "./Division.js";


const answer :
{
    numberone : number,
    numbertwo:number,
    Operator:string

} = await inquirer.prompt
([
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
    choices:["+","-","*","/"],
    message: "Select your operator: "
},

]);

//console.log(answer);

const {numberone,numbertwo,Operator} = answer;
if(numberone && numbertwo && Operator)
{   
    let result : number = 0;
    if(answer.Operator === "+")
    {
        result = numberone + numbertwo
    }
    else if(answer.Operator === "-")
    {
        result = numberone - numbertwo
    }
    if(answer.Operator === "*")
    {
        result = numberone * numbertwo
    }
    if(answer.Operator === "/")
    {
        result = numberone / numbertwo
    }
    console.log("Your Result is :" , result) 
}
    
else
{
    console.log("Kindly enter valid input")
}

