import React, { useState } from 'react';
import LightSwitch from "./components/LightSwitch";
import Status from "./components/Status";
import Counter from "./components/Counter";
import ResetButton from "./components/ResetButton";
import "./App.css";

const App = () => {
    // State variable 1
    const [lightOn, setLightOn] = useState(true);
    // State variable 2
    const [count, setCount] = useState(0);

    // A function which executes when you click the "LightSwitch" button...
    const useSwitch = () => {
        
        // * ==========
        // * STEP 1
        // * ==========
        // When the LightSwitch button is clicked, we should change the "lightOn" state variable to its OPPOSITE
        // To do this, we will use the "setLightOn" function to give "lightOn" its new value...
    
        // Call setLightOn, and the new value of "lightOn" will be NOT lightOn (the opposite of its current value, using the NOT "!" operator)
        setLightOn(!lightOn);

        // ? Alternative solution: use a ternary operator to do the same thing
        // setLightOn(lightOn ? false : true);
    
        // * ==========
        // * STEP 2
        // * ==========
        // Next, we will also update the "count" state variable to add one to its previous value
        setCount(count + 1);
    }    

    // A function which executes when you click the "Reset" button...
    const resetCount = () => {
        setCount(0);
    }

    return (
        <div>
            <LightSwitch update={useSwitch} />
            <Status isLightOn={lightOn} />
            <Counter currentCount={count}/>
            <ResetButton reset={resetCount} />
        </div>   
    )
}

export default App;