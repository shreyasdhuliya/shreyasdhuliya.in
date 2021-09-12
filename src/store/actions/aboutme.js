import {GET_ABOUTME, SET_ALERT, REMOVE_ALERT} from './types'

import {RDB} from '../../api/firebase';
import {v4 as uuidv4} from 'uuid';

//get about me object
export const getAboutMe = () => dispatch => {
    //get image src from firebase
    RDB.ref('aboutme').once('value').then( snap => {           
        let resData = snap.val();
        //if no background image return alert error
        if(resData === null || resData === undefined)
            {
                resData = {}
                const msg = "No About me information to display";
                const alertType = 'error';
                const idNoBg = uuidv4();
        
                dispatch({
                    type: SET_ALERT,
                    payload:{msg, alertType, idNoBg}
                })
                setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
            }
        dispatch({
            type: GET_ABOUTME,
            payload: resData
        })        
    })
}