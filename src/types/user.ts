export interface UserState {
    users: any[],
    loading: boolean,
    error: null | string  //либо нал либо string
}

export enum UserActionType {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERRORS = "FETCH_USERS_ERRORS",
}

export interface FetchUserAction {
    type: UserActionType.FETCH_USERS

}

export interface FetchUserSuccessAction {
    type: UserActionType.FETCH_USERS_SUCCESS
    payload: any[]
}

export interface FetchUserErrorsAction {
    type: UserActionType.FETCH_USERS_ERRORS
    payload: string
}

// interface UserAction {
//     type: string,
//     payload?: any
// }

export type UserAction = FetchUserAction | FetchUserSuccessAction | FetchUserErrorsAction

