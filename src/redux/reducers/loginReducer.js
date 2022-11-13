import { initialLoginState } from "./initialState";
import axios from "axios";

function loginReducer(state = initialLoginState, action) {
    switch (action.type) {

        case 'LOGIN_REQUEST':
            const { username, password } = action.payload
            const params = new URLSearchParams({
                username,
                password
            })

            try {
                async function login() {
                    const response = await axios.post('https://musutropicals.herokuapp.com/musubackend/api/auth/login', params)
                    console.log(response)
                    const { data, status } = response
                    if (status === 200) {
                        sessionStorage.setItem('token', data.access_token)
                        return true
                    }
                }



                if (login()) {
                    return {
                        ...state,
                        loggingIn: true,
                        user: action.payload
                    }
                }
                return initialLoginState
            }
            catch (e) {
                console.log('Error ', e)
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