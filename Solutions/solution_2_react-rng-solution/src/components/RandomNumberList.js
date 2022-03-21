import React from "react";
import RandomNumber from "./RandomNumber";

const RandomNumberList = props => {
    
    // 4. Take the current array of random numbers from App.js, using the "data" prop
    // ... Then create a new array of <RandomNumber/>s by MAPPING the array
    // If the state variable in App.js changes at any time, your app will re-render to show the latest numbers!   
    return (
        <div>
            {
                props.data.map((num, index) => {
                    return <RandomNumber key={index} number={num} />
                })
            }
        </div>
    );
}

export default RandomNumberList;