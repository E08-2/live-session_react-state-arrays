import React, { useState } from "react";
import Button from "./components/Button";
import NumbersList from "./components/NumbersList";

const App = () => {

    // * Goals for this app:

    // Create a state variable called "numbers", which is an ARRAY.
    // When the user clicks a button, the array should be updated to contain an extra number (+1 of the last highest number)
    // The state variable should be used to render a list-item inside a unordered list...
    // Every time the array is updated, we should get a new list-item, with the new value as its text content

    const [ numbers, setNumbers ] = useState([1, 2, 3]);    

    // * Update the below function so when you click the button...
    // * You update the state array to a new array containing +1 number (e.g. one click --> [1, 2, 3, 4]

    const updateArray = () => {
        // Your code goes here!

        // * Solution 1 - concat()
        // ? Logic - create a new array using .concat(), with a new number on the end (length of current array + 1)
        // setNumbers(numbers.concat(numbers.length + 1));

        // * Solution 2 - spread operator

        // ? Revision:
        // ? With the spread operator, we can "take out" values from an array and use them outside of the array...
        // ? Like a block of ice (the array) melting away, leaving only its values
        // ? Before the spread operator: [1, 2, 3]
        // ? After the spread operator (...numbers): 1, 2, 3

        // ? Logic: create a new array, containing the original numbers plus an extra number (length of original array + 1)
        setNumbers([...numbers, numbers.length +1]);

        // =========================================

        // * Also, because you are not allowed to mutate state variables, this is why to add 1 to a state "number" variable you can use:
        // setNumber(number + 1)
        // ! However, you cannot use an incrementor, as this would mutate the state variable:
        // ! setNumber(number++)
    }    

    return (
        <>
            {/* Click this button, add a new number to the array */}
            <Button propUpdateArray={updateArray} />
            {/* Display an unordered list containing as many list items as numbers in the array */}
            <NumbersList propNumbers={numbers} />
        </>
    );
}

export default App;
