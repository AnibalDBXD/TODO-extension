import React from 'react';
import Item from './Item';
import "./index.scss";
import { useTodoContext } from '../../../context/Todo/TodoContext';

const List = () => {
    const { Items, isDark } = useTodoContext()
    return (
        <ul className={`list ${isDark && "list--dark"}`}>
            {Items.map(({ checked, name }, index) => (
                <Item checked={checked} key={index}>{name}</Item>
            ))}
        </ul>
    )
};

export default List;
