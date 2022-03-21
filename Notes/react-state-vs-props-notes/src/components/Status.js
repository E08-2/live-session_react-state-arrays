import React from "react";

const Status = props => {
    return (
        // The div's class will be flexible... 
        // If the value of the "isLightOn" prop is true, the class will be "lit"
        // Else, the class will be "dark"
        // See App.css for the different styles for each class...
        <div className={props.isLightOn ? "lit" : "dark"}>{props.isLightOn ? "The room is lit!" : "The room is dark!"}</div>
    );
}

export default Status;