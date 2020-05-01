import React from 'react';
import './UserOutput.css'

const userInput = (props) => {
    return (
        <div className="UserOutput">
            <p>
            Name : {props.userName}
            </p>
            <p>
            paragraph 1 : {props.paragrah1}
            </p>
            <p>
            paragraph 2 : {props.paragrah2}
            </p>
        </div>
    )
};

export default userInput;