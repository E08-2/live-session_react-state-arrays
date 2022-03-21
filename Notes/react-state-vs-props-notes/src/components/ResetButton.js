import React from "react";

const ResetButton = props => {
    return (
        <button onClick={props.reset}>Reset count</button>
    );
}

export default ResetButton;