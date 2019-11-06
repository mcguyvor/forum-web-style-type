import React,{useState,useEffect} from 'react';
import './App.css';
import Nav from './component/Nav';
import Form from './component/Form';
import ForumItem from './component/ForumItem';
import firebase from './firebase';
import {useDispatch} from 'react-redux';
import {fetchData} from './action';
function App() {
  const [forum,newForum]=useState([]);
  const dispatch = useDispatch();

  useEffect(async()=>{
    /*const fetchData = async (dispatch)=>{
      const db = firebase.firestore();
      const data = await db.collection('forums').get();
      console.log('data',data.docs);
      const dataArr = data.docs.map(idx=>idx.data());
      setTest(dataArr);
      const fetch = dataArr=>dispatch(fetchData(dataArr));
      fetch();
    } */
    const db = firebase.firestore();
    const data = await db.collection('forums').get();
    const dataArr = data.docs.map(idx=>idx.data());
    dispatch(fetchData(dataArr));
  },[]);
    
  

  
  return (
    <div className="App">

      <Form forum={forum} newForum={newForum}/>
      <ForumItem/>
    </div>
  );
}

export default App;
