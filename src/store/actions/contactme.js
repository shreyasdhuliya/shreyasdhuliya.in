import {SHOW_HIDE_CONTACTME} from './types';

//takes bool value
export const setContactMeDisplay = (display) => dispatch => {
    dispatch({
        type: SHOW_HIDE_CONTACTME,
        payload: display
    })
}