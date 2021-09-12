import {combineReducers} from 'redux';
import alert from './alert';
import enterscreen from './enterscreen';
import homepage from './homepage';
import aboutme from './aboutme';
import contactme from './contactme'


export default combineReducers({
    alert,
    enterscreen,
    homepage,
    aboutme,
    contactme
})