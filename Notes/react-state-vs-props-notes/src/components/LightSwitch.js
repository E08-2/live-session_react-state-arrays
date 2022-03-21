import React from "react";

const LightSwitch = props => {
    return (
        <button onClick={props.update}>Press Switch</button>
    );
}

export default LightSwitch;