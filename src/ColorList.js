import React, {useState} from "react";
import {Link} from "react-router-dom";

const ColorList = ({colors}) => {

    const showColors = Object.keys(colors).map(color => (
        <li>
            <Link to={`/colors/${color.name}`}>{color.name}</Link>
        </li>
    ));
    return (
        <div>
            <h1>Make a new Color?</h1>
            <Link to="/colors/new">Create New Color</Link>
            <h3>Here are all the colors!</h3>
            <ul>
                {showColors}
            </ul>
        </div>
    );
}

export default ColorList;