import { createInterface } from "node:readline/promises";
import process from "node:process";

const user = createInterface({
    input: process.stdin,
    output: process.stdout
});

const value = await user.question("Enter your name : ");
console.log(value);

user.close();