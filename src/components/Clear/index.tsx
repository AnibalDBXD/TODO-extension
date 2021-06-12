import React from 'react';
import deleteIcon from "../../assets/img/delete.svg";
import { useTodoContext } from '../../context/Todo/TodoContext';
import "./index.scss";

const Clear = () => {
    const { reset } = useTodoContext()
    return (
        <button onClick={() => reset?.()} className="resetButton">
            <img src={deleteIcon} alt="clear button" />
        </button>
    )
}

export default Clear
