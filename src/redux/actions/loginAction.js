import { LoginActionTypes } from "./actionTypes";

export function loginRequest(username, password) {
    return {
        type: LoginActionTypes.LOGIN_REQUEST,
        payload: {
            username, password
        }
    }
}

export function loginSuccess(username) {
    return {
        type: LoginActionTypes.LOGIN_SUCCESS,
        payload: {
            username
        }
    }
}


export function loginFailure() {
    return {
        type: LoginActionTypes.LOGIN_FAILURE
    }
}