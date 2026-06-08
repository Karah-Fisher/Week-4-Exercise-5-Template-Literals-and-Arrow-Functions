// ==========================================
// 1. Create a multiline string using template literals
// ==========================================
const multilineString = `This is a multiline string.
It uses backticks instead of quotes.
This allows you to write across multiple lines easily.`;

console.log("--- Task 1: Multiline String ---");
console.log(multilineString);
console.log("\n");


// ==========================================
// 2. Create a function that uses template literals for HTML generation
// ==========================================
function generateUserCard(name, role, location) {
    return `
        <div class="user-card">
            <h2>${name}</h2>
            <p><strong>Role:</strong> ${role}</p>
            <p><strong>Location:</strong> ${location}</p>
        </div>
    `;
}

console.log("--- Task 2: HTML Generation ---");
console.log(generateUserCard("Alex Smith", "Developer", "Cape Town"));
console.log("\n");


// ==========================================
// 3. Convert regular functions to arrow functions
// ==========================================
// Regular function example:
// function add(a, b) {
//     return a + b;
// }

// Converted to arrow function:
const add = (a, b) => a + b;

// Another regular function example:
// function greet(name) {
//     return "Hello, " + name + "!";
// }

// Converted to arrow function using a template literal:
const greet = name => `Hello, ${name}!`;

console.log("--- Task 3: Arrow Functions ---");
console.log(`Add result: ${add(5, 10)}`);
console.log(greet("Developer"));
console.log("\n");


// ==========================================
// 4. Use arrow functions with array methods
// ==========================================
const numbers = [1, 2, 3, 4, 5];

// Using arrow functions with .map() to double the numbers
const doubledNumbers = numbers.map(num => num * 2);

// Using arrow functions with .filter() to keep only numbers greater than 5
const filteredNumbers = doubledNumbers.filter(num => num > 5);

console.log("--- Task 4: Array Methods ---");
console.log("Original numbers:", numbers);
console.log("Doubled numbers:", doubledNumbers);
console.log("Numbers > 5:", filteredNumbers);
