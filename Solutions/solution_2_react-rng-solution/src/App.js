import React, { useState } from "react";
import RandomNumberList from "./components/RandomNumberList";
import Button from "./components/Button";
import "./App.css";

const App = () => {
    // 1. Create a state variable to keep track of an array of random numbers by using a hook
    //    At the same time, create a function we can use to update this variable if something changes
    const [randomNumbers, setRandomNumbers ] = useState([]);
    
    // 2. Create a function, which generates a new random number
    //    When a new random number is generated, update the "randomNumbers" state variable using the spread operator...
    //    This should create a new array...
    //    Containing the numbers from the original array, plus the new random number...
    // * Now "randomNumbers" has been updated, the UI will re-render so the user can see what changed!

    const getNewRandomNumber = () => {
        let randomNum = Math.floor(Math.random() * 100) + 1;

        setRandomNumbers([...randomNumbers, randomNum]);

        // Alternative solution using .concat()...
        // ? setRandomNumbers(randomNumbers.concat(randomNum));
    }

    return (
        <div>
            <h1>Random Number Generator</h1>

            {/* 2B. When the button is clicked, use a prop to call the "getNewRandomNumber" function */}
            <Button getNumber={getNewRandomNumber} />

            {/* 3. When "randomNumbers" is been updated, the new array will be passed to the <RandomNumberList /> component as a prop */}
            {/* Now let's go to "RandomNumberList.js"... */}
            <RandomNumberList data={randomNumbers} />
        </div>
    );
}

export default App;