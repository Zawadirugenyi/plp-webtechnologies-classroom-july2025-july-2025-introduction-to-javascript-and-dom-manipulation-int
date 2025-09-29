// =======================
// Part 1: JavaScript Basics
// =======================
let name = "Zawadi"; // variable
let age = 20; // variable

// Conditional example
if (age >= 18) {
    document.getElementById("part1-output").textContent = `${name} is an adult.`;
} else {
    document.getElementById("part1-output").textContent = `${name} is a minor.`;
}

// =======================
// Part 2: Functions
// =======================

// Function 1: Sum of two numbers
function sum(a, b) {
    return a + b;
}
document.getElementById("sum-result").textContent = `Sum: ${sum(5, 10)}`;

// Function 2: Greeting function
function greetUser(username) {
    return `Hello, ${username}! Welcome to JavaScript.`;
}
document.getElementById("greeting-result").textContent = greetUser(name);

// =======================
// Part 3: Loops
// =======================

// Example 1: For loop
let list = document.getElementById("loop-list");
for (let i = 1; i <= 5; i++) {
    let li = document.createElement("li");
    li.textContent = `Item ${i}`;
    list.appendChild(li);
}

// Example 2: While loop
let counter = 1;
while (counter <= 3) {
    let li = document.createElement("li");
    li.textContent = `While loop item ${counter}`;
    list.appendChild(li);
    counter++;
}

// =======================
// Part 4: DOM Manipulation
// =======================

// 1. Change text on button click
document.getElementById("change-text-btn").addEventListener("click", function() {
    document.getElementById("dynamic-content").textContent = "Text has been changed!";
});

// 2. Toggle a CSS class on click
document.getElementById("toggle-class-btn").addEventListener("click", function() {
    document.getElementById("dynamic-content").classList.toggle("highlight");
});

// 3. Create dynamic elements
for (let i = 1; i <= 3; i++) {
    let p = document.createElement("p");
    p.textContent = `Dynamic paragraph ${i}`;
    document.getElementById("dynamic-content").appendChild(p);
}
