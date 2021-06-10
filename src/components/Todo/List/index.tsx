import React from 'react';
import Item from './Item';
import "./index.scss";

const List = () => {
    return (
        <ul className="list">
            <Item />
            <Item />
            <Item />
            <Item />
        </ul>
    )
};

export default List;
