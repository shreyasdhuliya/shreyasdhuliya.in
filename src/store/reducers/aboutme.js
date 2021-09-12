import {GET_ABOUTME} from '../actions/types';

const initialState = {
    aboutMe: {}
}


export default function(state = initialState, action){
    console.log();
   const {type, payload} = action;

   switch(type){
       case GET_ABOUTME:
           return {...state, aboutMe: payload}
       default:
           return state;

   }
}