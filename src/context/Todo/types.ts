import { INote } from "../../components/Todo/types";
import TodoActions from "./TodoActions";

export interface ITodoState {
    isDark: boolean;
    Items: INote[];
    setDark?: (newMode: boolean) => void;
}

export interface ITodoActions {
    type: TodoActions;
    payload: INote[] | boolean;
}