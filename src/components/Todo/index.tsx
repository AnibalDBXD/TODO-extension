import React, { FormEvent, useEffect, useState } from 'react';
import Switch from '../Switch';
import List from './List';
import Input from '../Input';
import { useTodoContext } from '../../context/Todo/TodoContext';
import add from "../../assets/img/add.svg"
import "./index.scss";
import Clear from '../Clear';


const Todo = () => {
    const { isDark, addNote, Items, setSearchNotes } = useTodoContext();
    const [search, setSearch] = useState("");
    const [create, setCreate] = useState("");

    const handleCreate = (e: FormEvent) => {
        e.preventDefault();
        addNote?.({ name: create });
        setCreate("");
    }

    useEffect(() => {
        setSearchNotes?.(Items.filter((value) => value.name.toLowerCase().includes(search.toLowerCase())));
    }, [search])
    return (
        <div className={isDark ? "TodoContainer--dark" : "TodoContainer--light"}>
            <div className={`header ${isDark && "header--dark"}`}>
                <h1>Todo-List</h1>
                <Switch />
            </div>
            <div className="InputContainer">
                <Input value={search} setValue={setSearch} placeholder="Search" />
                <form onSubmit={handleCreate} className="createForm">
                    <Input value={create} setValue={setCreate} placeholder="Create" />
                    {create !== "" && <button onSubmit={handleCreate} className="createForm__Button"><img src={add} alt="Add" /></button>}
                </form>
            </div>
            <List />
            <Clear />
        </div>
    );
};

export default Todo;
