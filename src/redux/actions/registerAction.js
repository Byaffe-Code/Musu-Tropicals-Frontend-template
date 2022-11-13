import { RegisterActionTypes } from "./actionTypes";

export function registerRequest(username, email, password) {
    return {
        type: RegisterActionTypes.REGISTER_REQUEST,
        payload: {
            username,
            email,
            password
        }
    }
}


export function registerSuccess(username, email) {
    return {
        type: RegisterActionTypes.REGISTER_SUCCESS,
        payload: {
            username,
            email
        }
    }
}


export function registerFailure() {
    return {
        type: RegisterActionTypes.REGISTER_FAILURE
    }
}