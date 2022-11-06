import { initialLoginState } from "./initialState";

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {

        case 'LOGIN_REQUEST':

            if (action.payload.email === 'root') {
                //test authentication
                sessionStorage.setItem('token', 'testtoken')
                return {
                    ...state,
                    loggingIn: true,
                    user: action.payload
                }
            }

            return initialLoginState

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