import React from 'react';
import Todo from '../../../../components/Todo';
import TodoProvider from '../../../../context/Todo/TodoProvider';
import './Popup.css';

const Popup = () => <TodoProvider><Todo /></TodoProvider>


export default Popup;
