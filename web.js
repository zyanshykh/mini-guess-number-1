import inquirer from "inquirer";
console.log("Guess a number between 1 to 10");
// now variables create 
let a = Math.floor(Math.random() * 10);
while (true) {
    let input = await inquirer.prompt({ name: "guess", type: "number", message: "Enter a guess number you want " });
    // Prodive code 
    let ans = input.guess;
    if (a == ans) {
        console.log("congratulation your guess number is correct ");
        break;
    }
    else {
        console.log("Sorry you guess wrong number try again");
    }
}
