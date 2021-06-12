import React from 'react';
import Item from './Item';
import "./index.scss";
import { useTodoContext } from '../../../context/Todo/TodoContext';

const List = () => {
    const { Items, isDark, searchNotes } = useTodoContext()
    return (
        <ul className={`list ${isDark && "list--dark"}`}>
            {searchNotes.toString() !== "" ?
                searchNotes.map(({ name }, index) => (
                    <Item key={index}>{name}</Item>
                ))
                :
                Items.map(({ name }, index) => (
                    <Item key={index}>{name}</Item>
                ))
            }
        </ul>
    )
};

export default List;
