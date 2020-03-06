// Once the value of a const variable is assigned, it cannot be changed into some new value in future.
// But if the const variable holds things like array, object then the inner content of that thing can 
// be changed but the main variable cannot be reassigned into something else.

const name = "Khairul Islam";
console.log(name);

// illegal
// name = "Rakibul Islam";
// console.log(name);

const prices = { potato: 25, onion: 34, rice: 42 };
console.log(prices);

// valid
prices["potato"] = 35;
console.log(prices);

prices.shahiJeera = 1500;
console.log(prices);

// illegal
// prices = { potato: 20, onion: 34, rice: 42 };
// console.log(prices);


// `let` is similar to `var` type. Both of their values can be reassigned but `let` variables are never
// accessible outside the scope where they are declared where `var` variables are sometimes accessible
// outside the scope where they were declared.

let sharePrice = 450;
sharePrice += 20;
console.log(sharePrice);

for(var i = 0; i < 10; i++){
    // do something
}
// the `i` variable declared inside the loop is accessible outside of the loop
console.log(i);

// will throw error if `count` is accessed outside the loop
for(let count = 0; i < 11; i++){
    // do something
}
// the `count` variable is not accessible outside the loop scope
// console.log(count);