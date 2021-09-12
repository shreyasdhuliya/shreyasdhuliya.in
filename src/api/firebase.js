import app from 'firebase/app';

import 'firebase/firestore'
import 'firebase/database'
 
//const FirebaseContext = React.createContext(null);
 
require('dotenv').config();

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain:  process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL:  process.env.REACT_APP_DATABASE_URL,
    projectId:  process.env.REACT_APP_PROJECT_ID,
    storageBucket:  process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId:  process.env.REACT_APP_APP_ID
  };

  //class Firebase {
  //  constructor() {
  //    app.initializeApp(config);
  //    this.db =  app.firestore();
  //    this.rdb =  app.database();
  //  }
 // }
   
const fbApp = app.initializeApp(config);
export const DB = fbApp.firestore();
export const RDB = fbApp.database();

 // export default Firebase;

 // export {FirebaseContext};