
export type ActionType = {
    type: "SET-OPPOSITION-BOOLEAN"
}

export const SET_OPPOSITION_BOOLEAN = "SET-OPPOSITION-BOOLEAN"

export type StateType = {
    collapsed: boolean
}



export const reducer = (state: StateType, action: ActionType): StateType => {
    if (action.type === SET_OPPOSITION_BOOLEAN) {
        const newState = {...state, collapsed: !state.collapsed}
        return newState
    }
    return state
}