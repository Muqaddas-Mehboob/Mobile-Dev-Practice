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