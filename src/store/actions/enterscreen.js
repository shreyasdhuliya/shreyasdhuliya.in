
import {GET_ES_BG, GET_ES_LINKS,SET_ALERT, REMOVE_ALERT } from './types';

import {RDB} from '../../api/firebase';
import {v4 as uuidv4} from 'uuid';


//get enter screen background image
export const getEsBg = () =>  dispatch => {
    
    //get image src from firebase
    RDB.ref('enter/backgroundimages').once('value').then( snap => {           
        let resData = snap.val();
        //if no background image return alert error
        if(resData === null || resData === undefined)
            {
                resData = {}
                const msg = "No background image to display";
                const alertType = 'error';
                const idNoBg = uuidv4();
        
                dispatch({
                    type: SET_ALERT,
                    payload:{msg, alertType, idNoBg}
                })
                setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
            }
        dispatch({
            type: GET_ES_BG,
            payload: resData
        })        
    })
    
}

//get social links
export const getEsLinks = () => dispatch => {
    RDB.ref('enter/links').once('value').then( snap => {
        let resData = snap.val();
        //if no background image return alert error
        if(resData === null || resData === undefined)
            {
                resData = []
                const msg = "No social links to display";
                const alertType = 'error';
                const idNoBg = uuidv4();
        
                dispatch({
                    type: SET_ALERT,
                    payload:{msg, alertType, idNoBg}
                })
                setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
            }
            else{
                //sorting buttons according to display order
                let keysLi = Object.keys(resData);
                let sortedList = [];
                let unsortedList = [];
                for (let i = 0; i < keysLi.length; i++) {
                    let newObj = {"displayorder":resData[keysLi[i]]["display-order"], 
                                 "link":resData[keysLi[i]]["link"],
                                 "name":resData[keysLi[i]]["name"],  } 
                   unsortedList.push(newObj);
                }
                sortedList = unsortedList.sort(function (a, b) { return a.displayorder - b.displayorder });
                //initialize payload
                resData = sortedList;
            }
        dispatch({
            type: GET_ES_LINKS,
            payload: resData
        }) 
    })
}