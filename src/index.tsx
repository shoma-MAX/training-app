
import firebase from 'firebase';
import React, { useState } from 'react';
import { render } from 'react-dom';


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

function App() {
  const [users, setUsers]: any[] = useState([]);
  const [userName, setUserName] = useState('');
  const [age, setAge] = useState('');
  const handleClickFetchButton = async () => {
    // document 取得
    const db = firebase.firestore();
    /*const doc = await db.collection('users').doc('CH1myjCXfnAV7xw8K7DG').get();
    console.log(doc.data());
    console.log('Fetch Clicked');
    */

    // collection取得
    const snapshot = await db
      .collection('users')
      .get()
    const _users: any = [];
    snapshot.forEach(doc => {
      _users.push({
        userId: doc.id,
        ...doc.data()

      });
    });
    setUsers(_users);
  }

  const userListItems = users.map((user: { userId: React.Key | null | undefined; name: string; age: string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined; }) => {
    return (
      <li key={user.userId}> {user.name}:{user.age}:</li>
    )
  })
  const handleClickAddButton = async () => {
    // document 取得
    const db = firebase.firestore();
    // setを使ったデータ追加
    //   await db
    //   .collection('users')
    // idを指定。add()では必要ない
    //   .doc('1')
    //   .set({
    //     // name:'ダミー',
    //     age:99
    // // merge trueがあると上書きするときに値がある場所だけ上書きされる。
    //   },{merge:true});
    // }

    // addを使ったデータ追加 id自動採番
    // const ref = await db
    //   .collection('users')
    //   .add({
    //     name: 'テスト太郎',
    //     age: 28,
    //     location: 'tokyo',
    //     alive: true
    //   });
    //   const snapShot = await ref.get();
    //   const data=snapShot.data();
    //   console.log(ref.id,data);

    if (!userName || !age) {
      alert('userName またはageが空です');
      return;

    }
    const parseAge = parseInt(age, 10);

    if (isNaN(parseAge)) {
      alert('numberは半角の数値でセットしてください。　')
      return;
    }

    const ref = await db.collection('users').add({
      name: userName,
      age: age
    })

  }
  const handleClickDeleteButton = async () => {
    // const db = firebase.firestore();
    // db.collection('users').doc('1').delete().then(function () {
    //   console.log('削除実行')
    // }).catch(function (error) {
    //   console.log('エラー発生', error)
    // });
  };

  return (
    <div className="App">
      <h1 >Hello World</h1>
      <div>
        <label htmlFor="username">userName:</label>
        <input
          type="text"
          id="username"
          value={userName}
          onChange={(event) => { setUserName(event.target.value) }}
        ></input>
        <label htmlFor="userage">userAge:</label>
        <input
          type="text"
          id="userage"
          value={age}
          onChange={(event) => { setAge(event.target.value) }}
        ></input>
      </div>
      <button onClick={handleClickFetchButton}>取得</button>
      <button onClick={handleClickAddButton}>追加</button>
      <button onClick={handleClickDeleteButton}>削除</button>
      <ul>{userListItems}</ul>
    </div>

  )

}


render(<App />, document.getElementById("root"));
