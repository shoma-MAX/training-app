
import firebase from 'firebase';
import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

import './index.css';

const firebaseConfig = {
    apiKey: "AIzaSyDx9gHV4SLT3VJIZ9QcTXlg1so75QiInbo",
    authDomain: "testdb-34890.firebaseapp.com",
    databaseURL: "https://testdb-34890.firebaseio.com",
    projectId: "testdb-34890",
    storageBucket: "testdb-34890.appspot.com",
    messagingSenderId: "747671733994",
    appId: "1:747671733994:web:ac289ee551e44df09c7993",
    measurementId: "G-Y7Q6F9VKFF"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  function App(){
    const [users,setUsers]:any[] =useState([]);
    const handleClickFetchButton = async ()=>{
      // document 取得
      const db=firebase.firestore();
      /*const doc = await db.collection('users').doc('CH1myjCXfnAV7xw8K7DG').get();
      console.log(doc.data());
      console.log('Fetch Clicked');
      */

      // collection取得
      const snapshot = await db
      .collection('users')
      .get()
      const _users :any= [];
      snapshot.forEach(doc => {
        _users.push({
          userId:doc.id,
          ...doc.data()
          
        });
      });
      setUsers(_users);
    }
    const userListItems =users.map((user: { userId: React.Key | null | undefined;name:string; age: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; })=>{
      return (
        <li key={user.userId}> {user.name}:{user.age}:</li>
      )
    })
  
    return (
      <div className = "App">
        <h1 >Hello World</h1>
        <button onClick={handleClickFetchButton}>取得</button>
        <ul>{userListItems}</ul>
      </div>

    )

  }

  
render(<App />, document.getElementById("root"));
