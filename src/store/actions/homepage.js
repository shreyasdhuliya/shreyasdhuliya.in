import {GET_DP,GET_HP_LINKS,GET_SHORTCUT_BTNS,GET_HP_TAB_INFO, SET_ALERT, REMOVE_ALERT} from './types';

import {RDB} from '../../api/firebase';
import {v4 as uuidv4} from 'uuid';

//get profile pic
export const  getDp = () => dispatch => {
    RDB.ref('profilepic').once('value', snap => {

        let resData = snap.val();
        //console.log(snap.val())
        if(resData === null || resData === undefined)
        {
            resData = {}
            const msg = "No Profile image to display";
            const alertType = 'error';
            const idNoBg = uuidv4();
    
            dispatch({
                type: SET_ALERT,
                payload:{msg, alertType, idNoBg}
            })
            setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
        }
        dispatch({
            type: GET_DP,
            payload: resData
        })      
    })
}

//get social media links
export const getHpLinks = () => dispatch => {
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
            type: GET_HP_LINKS,
            payload: resData
        }) 
    })
}

//get shorcut buttons for home page
export const getShortcutButtons = () => dispatch => {
  
    RDB.ref('home/shortcut').once("value", snap => {    
        let resData = snap.val();
          
            if(resData === null || resData === undefined)
            {
                resData = []
                const msg = "No buttons to display";
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
                                 "title":resData[keysLi[i]]["title"],
                                 "width":resData[keysLi[i]]["width"], 
                                 "imgurl":resData[keysLi[i]]["url"],
                                 "link": resData[keysLi[i]]["link"] } 
                   unsortedList.push(newObj);
                }
                sortedList = unsortedList.sort(function (a, b) { return a.displayorder - b.displayorder });
                //initialize payload
                resData = sortedList;
            }

        dispatch({
            type: GET_SHORTCUT_BTNS,
            payload: resData
        })            
    })
}

// get tab names and panel images details
export const getHpTabInfo = () => dispatch => {
    RDB.ref('home/tabs').once('value').then( snap => {
        let resData = snap.val();
        //if no background image return alert error
        if(resData === null || resData === undefined)
            {
                resData = {};
                const msg = "No tab- info to display";
                const alertType = 'error';
                const idNoBg = uuidv4();
        
                dispatch({
                    type: SET_ALERT,
                    payload:{msg, alertType, idNoBg}
                })
                setTimeout(()=> dispatch({type: REMOVE_ALERT, payload: idNoBg}), 5000)
            }
        else{
            //header button info------------------------------------//'
            let taborder = resData["taborder"]
            let keysLi = Object.keys(taborder);
                let sortedHList = [];
                let unsortedList = [];
                for (let i = 0; i < keysLi.length; i++) {
                    let newObj = {"displayorder":resData["taborder"][keysLi[i]]["display-order"], 
                                 "panel":resData["taborder"][keysLi[i]]["panel"],
                                 "tabname":resData["taborder"][keysLi[i]]["tabname"] } 
                   unsortedList.push(newObj);
                }
                sortedHList = unsortedList.sort(function (a, b) { return a.displayorder - b.displayorder });
              
            //tab panel images and links--------------------------------//
            //left and right content

            let newImagesList = {}
            //[{panel2: {left:[], right:[]}}]

            for (let i=0; i < sortedHList.length ; i++ ){
                let curPanel = sortedHList[i].panel;
                //console.log(curPanel,"************************");
                let leftGridContent = resData[curPanel]["left"];
                let rightGridContent = resData[curPanel]["right"];
               // console.log(leftGridContent,"************************");
               // console.log(rightGridContent,"************************");

                //left content in array
            let leftGridArr=[]; 
            for (let i = 0 ; i < Object.keys(leftGridContent).length; i++ ){
                leftGridArr.push(leftGridContent[Object.keys(leftGridContent)[i]])
            }

            //console.log(leftGridArr,"************************");

            //right content in array
            let rightGridArr=[]; 
            for (let i = 0 ; i < Object.keys(rightGridContent).length; i++ ){
                rightGridArr.push(rightGridContent[Object.keys(rightGridContent)[i]])
            }

            let newObj  = {}

            newObj["left"] = leftGridArr;
            newObj["right"] = rightGridArr;

            newImagesList[curPanel] = newObj;

            }

            console.log(newImagesList, "************")

           /*  let leftGridContent = resData.panel1["left"]
            let rightGridContent = resData.panel1["right"]
            
            //left content in array
            let leftGridArr=[]; 
            for (let i = 0 ; i < Object.keys(leftGridContent).length; i++ ){
                leftGridArr.push(leftGridContent[Object.keys(leftGridContent)[i]])
            }

            //right content in array
            let rightGridArr=[]; 
            for (let i = 0 ; i < Object.keys(rightGridContent).length; i++ ){
                rightGridArr.push(rightGridContent[Object.keys(rightGridContent)[i]])
            }
            
            //new imageslist
            let newImagesList = {}
            newImagesList["left"] = leftGridArr;
            newImagesList["right"] = rightGridArr; */

            resData = {"tabHeadingInfo": sortedHList, "panelInfo":newImagesList}
        }
        dispatch({
            type: GET_HP_TAB_INFO,
            payload: resData
        }) 
    })
}