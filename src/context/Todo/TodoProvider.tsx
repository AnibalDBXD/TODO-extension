import React, { ReactNode, useEffect, useReducer } from "react";
import TodoActions from "./TodoActions";
import { initialState, TodoContext } from "./TodoContext";
import TodoReducer from "./TodoReducer";

interface IProps {
    children: ReactNode;
}

const TodoProvider = ({ children }: IProps): JSX.Element => {
    const [state, dispatch] = useReducer(TodoReducer, initialState);

    useEffect(() => {
        chrome.storage.local.get(null, (result) => {
            if (String(JSON.stringify(result)) === "{}") return;
            if (result?.items !== undefined) {
                dispatch({ payload: result.items, type: TodoActions.SET_ITEMS })
            }
            if (result?.isDark !== undefined) {
                dispatch({ payload: result.isDark, type: TodoActions.SET_DARK })
            }
        })
    }, []);

    const setDark = (newMode: boolean): void => {
        dispatch({ payload: newMode, type: TodoActions.SET_DARK });
    }

    return (
        <TodoContext.Provider
            value={{
                Items: state.Items,
                isDark: state.isDark,
                setDark
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;