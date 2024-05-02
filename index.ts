#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.cyanBright("Game: let's guess a number between  (1 to 10) in 3 tries"));
const randomNumber = Math.floor( Math.random() * 10+1);let triesNumber = 3;

while (triesNumber > 0) {
    const answer = await inquirer.prompt([
        {
            message: "Please Enter Your Number",
            type: "input", // Use "input" instead of "Number"
            name: "userNumber",
        }
    ]);

    const userNumber = parseInt(answer.userNumber); // Convert user input to a number

    if (userNumber === randomNumber) {
        console.log(chalk.yellow("Congrats! You Guessed the Right Number"));
        triesNumber = 0;
    } else {
        console.log(chalk.red("Oops! Sorry, You Guessed the Wrong Number "));
        if (randomNumber > userNumber) 
            console.log(chalk.green("\tThink Higher"));
        else
            console.log(chalk.blueBright("\tThink Lower"));
    }
    console.log(`\tYou have ${triesNumber - 1} tries left`);
    console.log("\tPlease Try Again!");
    
    triesNumber--;
}