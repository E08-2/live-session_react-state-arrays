// * How to update a state array variable in React...

// How about we PUSH a new number to the array?
        
// ! setNumbers(numbers.push(numbers.length + 1));

// * A warning about updating ARRAYS in state...
// ! When we want to update an array, we shouldn't try to PUSH the new value into the current array!
        
// ? Why?
// * Using .push() CHANGES ("mutates") the array.
// React's documentation recommends that you do not mutate state variables - for reasons we will look at a little later!
// * Key concept - state variables in React should be treated as IMMUTABLE.
// Instead of muting the array, we should simply UPDATE it with a new value...
// So, instead of updating the old array, we replace it with a new array containing the updated values!

// * Two common ways of doing this (two alternatives to using .push() to change a state array...):

// * 1. Spread operator (...)
// * 2. Array method: .concat()

// * See the solution for more details...