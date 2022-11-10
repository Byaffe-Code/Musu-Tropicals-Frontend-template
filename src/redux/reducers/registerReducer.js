import { initialSignUpState } from "./initialState";
import axios from "axios";

function registerReducer(state = initialSignUpState, action) {

    switch (action.type) {

        case 'REGISTER_REQUEST':
            return {
                ...state,
                registering: true,
                user: action.payload
            }


        case 'REGISTER_SUCCESS':
            return {
                ...state,
                registered: true,
                registering: false,
                user: action.payload,
            }


        case 'REGISTER_FAILURE':
            return initialSignUpState

        default:
            return state
    }

}


export default registerReducer