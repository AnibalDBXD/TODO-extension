import React from 'react';
import Switch from '../Switch';
import List from './List';
import "./index.scss";
import Input from '../Input';

const Todo = () => {
    return (
        <div>
            <div className="header">
                <h1>Todo-List</h1>
                <Switch />
            </div>
            <div className="InputContainer">
                <Input placeholder="Search" />
                <Input placeholder="Create" />
            </div>
            <List />
        </div>
    );
};

export default Todo;
