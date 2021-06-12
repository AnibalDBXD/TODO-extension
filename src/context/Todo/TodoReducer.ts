import { INote } from './../../components/Todo/types';
import TodoActions from './TodoActions'
import { ITodoState, ITodoActions } from './types'

const TodoReducer = (state: ITodoState, action: ITodoActions): ITodoState => {
    const { payload, type } = action

    switch (type) {
        case TodoActions.SET_ITEMS:
            return {
                ...state,
                Items: payload as INote[]
            }
        case TodoActions.SET_DARK:
            return {
                ...state,
                isDark: payload as boolean
            }
        default:
            return state
    }
}

export default TodoReducer;