import React, { useState } from 'react';
import remove from "../../../../assets/img/remove.svg"
import { useTodoContext } from '../../../../context/Todo/TodoContext';
import "./index.scss"
import { IItem } from './types';

const Item = ({ children, checked }: IItem) => {
  const { deleteNote } = useTodoContext()
  const [isCheked, setCheked] = useState(checked);
  return (
    <li className="listItem">
      <p className="listItem__name">{children}</p>
      <input defaultChecked={isCheked} onChange={() => setCheked((currentCheked => !currentCheked))} type="checkbox" className="listItem__check" />
      <button onClick={() => deleteNote?.(children)} className="listItem__delete">
        <img src={remove} alt="delete" />
      </button>
    </li>
  );
};

export default Item;
