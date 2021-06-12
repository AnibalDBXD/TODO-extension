import React, { ChangeEvent } from 'react';
import { IInput } from './types';
import "./index.scss"
import { useTodoContext } from '../../context/Todo/TodoContext';

const Input = ({ placeholder, value, setValue }: IInput) => {
    const { isDark } = useTodoContext()
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        event.preventDefault();
        setValue?.(event.target.value);
    }
    return (
        <input value={value} onChange={handleChange} className={`Input ${isDark && "input--dark"}`} placeholder={placeholder} />
    )
}

export default Input
