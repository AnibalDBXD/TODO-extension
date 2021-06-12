import React from 'react';
import remove from "../../../../assets/img/remove.svg"
import { useTodoContext } from '../../../../context/Todo/TodoContext';
import "./index.scss"
import { IItem } from './types';

const Item = ({ children }: IItem) => {
  const { deleteNote } = useTodoContext()
  return (
    <li className="listItem">
      <p className="listItem__name">{children}</p>
      <button onClick={() => deleteNote?.(children)} className="listItem__delete">
        <img src={remove} alt="delete" />
      </button>
    </li>
  );
};

export default Item;
