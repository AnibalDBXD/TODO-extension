import React, { ReactNode, useEffect, useReducer } from "react";
import { INote } from "../../components/Todo/types";
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
        chrome.storage.local.set({ isDark: newMode });
    }

    const addNote = (newNote: INote): void => {
        dispatch({ payload: newNote, type: TodoActions.ADD_ITEM });
        chrome.storage.local.set({ items: [newNote, ...state.Items] });
    }

    const deleteNote = (noteName: string): void => {
        const newItems = state.Items.filter((notes) => notes.name !== noteName);
        const newSearchItems = state.searchNotes.filter((notes) => notes.name !== noteName);
        dispatch({ payload: newItems, type: TodoActions.SET_ITEMS });
        dispatch({ payload: newSearchItems, type: TodoActions.SET_SEARCH_ITEMS });
        chrome.storage.local.set({ items: newItems });
    }

    const reset = (): void => {
        dispatch({ payload: null, type: TodoActions.RESET });
        chrome.storage.local.clear()
    }

    const setSearchNotes = (newNotes: INote[]): void => {
        dispatch({ payload: newNotes, type: TodoActions.SET_SEARCH_ITEMS });
    }

    return (
        <TodoContext.Provider
            value={{
                Items: state.Items,
                isDark: state.isDark,
                searchNotes: state.searchNotes,
                setSearchNotes,
                setDark,
                addNote,
                deleteNote,
                reset
            }}>
            {children}
        </TodoContext.Provider>
    );
};

export default TodoProvider;