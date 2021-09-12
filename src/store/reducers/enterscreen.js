import { GET_ES_BG, GET_ES_LINKS } from "../actions/types";


const initialState = {
    backgroundImg: {},
    socialLinks:[]
}

export default function(state = initialState, action){
     console.log();
    const {type, payload} = action;

    switch(type){
        case GET_ES_BG:
            return {...state, backgroundImg: payload}
        case GET_ES_LINKS:
            return {...state, socialLinks: payload}
        default:
            return state;

    }
}