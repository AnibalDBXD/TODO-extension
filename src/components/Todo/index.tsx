import React, { useState } from 'react';
import Switch from '../Switch';
import List from './List';
import Input from '../Input';
import { useTodoContext } from '../../context/Todo/TodoContext';
import add from "../../assets/img/add.svg"
import "./index.scss";


const Todo = () => {
    const { isDark } = useTodoContext();
    const [search, setSearch] = useState("");
    const [create, setCreate] = useState("");

    return (
        <div className={isDark ? "TodoContainer--dark" : "TodoContainer--light"}>
            <div className={`header ${isDark && "header--dark"}`}>
                <h1>Todo-List</h1>
                <Switch />
            </div>
            <div className="InputContainer">
                <Input value={search} setValue={setSearch} placeholder="Search" />
                <form className="createForm">
                    <Input value={create} setValue={setCreate} placeholder="Create" />
                    {create !== "" && <button className="createForm__Button"><img src={add} alt="Add" /></button>}
                </form>
            </div>
            <List />
        </div>
    );
};

export default Todo;
