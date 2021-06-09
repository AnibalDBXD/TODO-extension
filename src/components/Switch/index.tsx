import React from 'react';
import "./index.scss";

const Switch = () => {
    return (
        <label className="switch">
            <input type="checkbox" />
            <span className="slider round" />
        </label>
    )
}

export default Switch;
