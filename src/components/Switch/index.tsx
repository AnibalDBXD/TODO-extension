import React from 'react';
import { useTodoContext } from '../../context/Todo/TodoContext';
import "./index.scss";

const Switch = () => {
    const { isDark, setDark } = useTodoContext()
    return (
        <label className="switch">
            <input className={`${isDark && "checked"}`} onClick={() => setDark?.(!isDark)} type="checkbox" />
            <span className="slider round" />
        </label>
    )
}

export default Switch;
