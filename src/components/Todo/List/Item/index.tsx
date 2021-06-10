import React from 'react';
import remove from "../../../../assets/img/remove.svg"
import "./index.scss"

const Item = () => {
  return (
    <li className="listItem">
      <p className="listItem__name">ComidaComidaComida</p>
      <input type="checkbox" className="listItem__check" />
      <button className="listItem__delete">
        <img src={remove} alt="delete" />
      </button>
    </li>
  );
};

export default Item;
