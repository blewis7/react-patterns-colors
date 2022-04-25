import React from "react";
import {Link} from "react-router-dom";

const Color = ({name}) => {
    return (
        <>
            <div style={{backgroundColor: name}}>
                <h1>Here is the color {name}!</h1>
            </div>
            <Link to="/colors">Back</Link>
        </>
    );
}

export default Color;