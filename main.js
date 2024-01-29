import inquirer from "inquirer";
let Conversion = {
    "PKR": {
        "US Dollar": 0.003574,
        "Euro": 0.003292,
        "British Pound": 0.002814,
        "Indian Rupee": 0.297097,
        "PKR": 1
    },
    "US Dollar": {
        "Euro": 0.920955,
        "British Pound": 0.787273,
        "Indian Rupee": 83.117819,
        "PKR": 279.819688,
        "US Dollar": 1,
    },
    "Euro": {
        "US Dollar": 1.085830,
        "British Pound": 0.854936,
        "Indian Rupee": 90.250440,
        "PKR": 303.844996,
        "Euro": 1,
    },
    "British Pound": {
        "US Dollar": 1.270047,
        "Euro": 1.169383,
        "Indian Rupee": 105.561733,
        "PKR": 355.396318,
        "British Pound": 1,
    },
    "Indian Rupee": {
        "US Dollar": 0.012031,
        "Euro": 0.011080,
        "British Pound": 0.009472,
        "PKR": 3.365690,
        "Indian Rupee": 1
    },
};
const answer = await inquirer.prompt([
    {
        type: "list",
        name: "From",
        choices: ["PKR", "US Dollar", "Euro", "British Pound", "Indian Rupee"],
        message: "Select you currency; "
    },
    {
        type: "list",
        name: "To",
        choices: ["PKR", "US Dollar", "Euro", "British Pound", "Indian Rupee"],
        message: "Select you Conversion currency; "
    },
    {
        type: "number",
        name: "amount",
        message: "Input your amount; "
    }
]);
const { From, To, amount } = answer;
if (From && To && amount) {
    let result = Conversion[From][To] * amount;
    console.log(`Your Conversion From ${From} to ${To} is ${result}`);
}
else {
    console.log("Invalid inputs");
}
