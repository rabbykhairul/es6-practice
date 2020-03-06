// spread(...) operator is used to breakdown an array and get comma separated list
// of all the elements.
// For example: a = [1, 3, 8]
// ...a will give back 1,3,8
// 
// The most common use of spread operator in JS is to concat two or more arrays 
// into a single array. Another use of it is to get comma separated list of all
// elements of an array and then pass that list as arguments for another function
// call.

// Concat two or more arrays using spread operator
const arr1 = [1, 3, 7, 18];
const arr2 = [2, 89, 24, 928];
const finalArr = [ ...arr1, 0, 28, ...arr2 ];
console.log(finalArr);

// Pass all elements of an array as arguments to a function
const numbers = [2, 18, 9284, 2983, 283, 9283];
const maxVal = Math.max(...numbers);
console.log(maxVal);

const marks = [98, 29, 64, 28];
const totalMark = (mathMark, engMark, banglaMark, sociologyMark) => mathMark + engMark + banglaMark + sociologyMark;
console.log(totalMark(...marks));