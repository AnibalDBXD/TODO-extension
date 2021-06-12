import { createContext, useContext } from 'react';
import { ITodoState } from './types';

export const initialState: ITodoState = {
  Items: [],
  isDark: false,
  searchNotes: []
};

export const TodoContext = createContext<ITodoState>(initialState);

export const useTodoContext = (): ITodoState => useContext(TodoContext);