import { createInterface } from "node:readline/promises";
import process from "node:process";

const user = createInterface({
    input: process.stdin,
    output: process.stdout
});


const verifyAge = async () => {
    const value = await user.question("Enter your name : ");
    const age = +value;
    if (Number.isNaN(age)) {
        throw new Error("Invalid Input Given!!");
    }
    if (age >= 18) {
        console.log("Welcome User!!");
    } else {
        console.log("Sorry User your age is not fullfiled by us!");

    }
    user.close();
}

verifyAge();

// here is a comment