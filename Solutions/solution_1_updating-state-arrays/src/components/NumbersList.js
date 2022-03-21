import React from "react";

const NumbersList = props => {
    return (
        <ul>
            {
                props.propNumbers.map((num, index) => {
                    return <li key={index}>{num}</li>
                })
            }
        </ul>
    );
}

export default NumbersList;