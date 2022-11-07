import { initialLoginState } from "./initialState";
import axios from "axios";
import qs from 'qs'
function loginReducer(state = initialLoginState, action) {
    switch (action.type) {

        case 'LOGIN_REQUEST':
            // const {username,password} = action.payload
            // const params = new URLSearchParams({
            //     username,
            //     password
            // })

            const data = {
                method:'POST',
                headers:{
                    'Access-Control-Allow-Origin': '*',
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body:action.payload

            }
            try{
                fetch('https://musutropicals.herokuapp.com/musubackend/api/login',data).then(
                response=>console.log(response)
            )
            }
            catch(e){
                console.log('Error ',e)
            }

            if (action.payload.username === 'root') {
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