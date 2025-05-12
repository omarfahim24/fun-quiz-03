// In javascript, before the code runs the variables and function declarations are moved to the top of the scope. This is called hoisting. 
// -> Hoisting with var: varuable declared with var are hoisted and are initialized with undefined. For instance: 
console.log(hello);
var hello = "world";

// -> Hoisting with let: variable delcared with let are also hoisted but are not initialized before execution so accessing them before declaration will throw an error.

console.log(omar);
let omar = "fahim";