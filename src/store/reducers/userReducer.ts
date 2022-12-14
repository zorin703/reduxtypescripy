// const FETCH_USERS = "FETCH_USERS"
// const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
// const FETCH_USERS_ERRORS = "FETCH_USERS_ERRORS"
// убираем так как указали в enum файл userAC.ts

import {UserAction, UserActionType, UserState} from "../../types/user";

const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action: UserAction): UserState => {
    switch (action.type) {
        case UserActionType.FETCH_USERS:
            return {loading: true, error: null, users: []}
        case UserActionType.FETCH_USERS_SUCCESS:
            return {loading: false, error: null, users: action.payload}
        case UserActionType.FETCH_USERS_ERRORS:
            return {loading: false, error: action.payload, users: []}
        default:
            return state
    }
}


