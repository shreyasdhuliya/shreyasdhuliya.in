import { SHOW_HIDE_CONTACTME } from "../actions/types";


const initialState = {
    displayContactForm: false
}

export default function(state = initialState, action){
     console.log();
    const {type, payload} = action;

    switch(type){
        case SHOW_HIDE_CONTACTME:
            return {...state, displayContactForm: payload}
        default:
            return state;

    }
}