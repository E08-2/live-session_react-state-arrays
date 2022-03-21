import React, { useState } from "react";
import RandomNumberList from "./components/RandomNumberList";
import Button from "./components/Button";
import "./App.css";

const App = () => {
    // 1. A. Create a state variable called "randomNumbers" by using a "useState" hook
    //    B. At the same time, create a function we can use to update this variable if something changes
    //    C. Set the initial value of the variable to be an empty array
    const [randomNumbers, setRandomNumbers ] = useState([]);
    
    // 2. Create a function, "getNewRandomNumber", which generates a new random number
    //    When a new random number is generated, update the "randomNumbers" state array using the spread operator...
    //    This should create a NEW array...
    //    Containing the numbers from the original array, PLUS the new random number...
    // Now "randomNumbers" has been updated, the UI will re-render so the user can see what changed!
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

            {/* 
                3. When the "randomNumbers" state array is updated... 
                   ... its new value will be passed to the <RandomNumberList /> component via a prop named "data"
        
                Now let's go to "RandomNumberList.js"... 
            */}
            <RandomNumberList data={randomNumbers} />
        </div>
    );
}

export default App;