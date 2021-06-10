import React from 'react';
import { IInput } from './types';
import "./index.scss"

const Input = ({ placeholder }: IInput) => {
    return (
        <input className="Input" placeholder={placeholder} />
    )
}

export default Input
