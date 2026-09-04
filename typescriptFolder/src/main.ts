console.log("Hello, TypeScript!");

let message: string = "Hello, TypeScript!";
console.log(message);

let number: number = 42;
console.log(`The number is: ${number}`);

let isActive: boolean = true;   
console.log(`Is active: ${isActive}`);

let numbers: number[] = [1, 2, 3, 4, 5];
console.log(`Numbers array: ${numbers.join(", ")}`);

let anyValue: any = "This can be any type";
console.log(`Any value: ${anyValue}`);

function greet(name: string): string {
    return `Hello, ${name}!`;
}
console.log(greet("Alice"));

let items: Array<string | number> = [2, "banana", "cherry"];
let newItems: string[] = ["date", "elderberry", "fig"];
console.log(`Items: ${items.join(", ")}`);
console.log(`New items: ${newItems.join(", ")}`);
console.log(`Combined items: ${[...items, ...newItems].join(", ")}`);

// let names: string[] = ["Mario", "Luigi", "Peach"];
// names.push("Bowser"); // OK
// names.push(123); // Error: Type 'number' is not assignable to type 'string'
// let scores: number[] = [25, 28, 24];
// scores.push(30); // OK
// scores.push("high"); // Error: Type 'string' is not assignable to type 'number'
// let isActive: boolean[] = [true, false, true];
// isActive.push(false); // OK
// isActive.push("yes");