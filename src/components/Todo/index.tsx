import React from 'react';
import Switch from '../Switch';
import List from './List';
import "./index.scss";

const Todo = () => {
    return (
        <div>
            <div className="header">
                <h1>Todo-List</h1>
                <Switch />
            </div>
            <List />
        </div>
    );
};

export default Todo;
