import {GET_DP, GET_HP_LINKS, GET_HP_TAB_INFO, GET_SHORTCUT_BTNS} from '../actions/types';

const initialState = {
    profilePic: "",
    socialLinks:[],
    shortcutBtns: [],
    tabInfo:{}
}

export default function(state = initialState, action){
    console.log();
   const {type, payload} = action;

   switch(type){
       case GET_DP:
           return {...state, profilePic: payload}
       case GET_HP_LINKS:
           return {...state, socialLinks: payload}
        case GET_SHORTCUT_BTNS:
           return {...state, shortcutBtns: payload}
        case GET_HP_TAB_INFO:
            return {...state, tabInfo: payload}
       default:
           return state;
   }
}