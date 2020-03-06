// arrow(=>) functions is another way of writing functions in JavaScript ES6.
// These functions works exactly the same way normal functions that we define
// using `function` keyword. They can accept argument or may not have any args
// and they can return value.

const doubleIt = num => num * 2;
console.log(doubleIt(2));
console.log(doubleIt(12));

const add = (a, b = 10) => a + b;
console.log(add(2, 8));
console.log(add(3));

const sayHi = () => "Hi Thereeeeee!!!!!!!!!!";
console.log(sayHi());

const areaOfCircle = (radius) => {
    const pi = 3.1416;
    return pi * radius * radius;
};
console.log(areaOfCircle(2));