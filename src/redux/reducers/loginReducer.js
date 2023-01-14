import { initialLoginState } from "./initialState";
import axios from "axios";

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {

        case 'LOGIN_REQUEST':
            const { username, password } = action.payload

            return {
                ...state,
                loggingIn: true,
            }

        case 'LOGIN_SUCCESS':
            return {
                ...state,
                loggedIn: true,
                loggingIn: false,
                user: {
                    email: action.payload.email
                }
            }


        case 'LOGIN_FAILURE':
            return initialLoginState


        default:
            return state
    }
}

export default loginReducer