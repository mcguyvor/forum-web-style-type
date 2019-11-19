import React,{useState,useEffect} from 'react';
import {Route,Switch,BrowserRouter} from 'react-router-dom';
import Form from './component/Form';
import firebase from './firebase';
import {useDispatch,useSelector} from 'react-redux';
import {fetchData} from './action';
import Home from './component/Home';
import LoginForm from './component/LoginForm';
import Signup from'./component/Signup';
import EditForum from './component/EditForum';
import ForumItem from './component/ForumItem';
import Stock from './component/Stock';
import Admin from './component/Admin';
function App() {
  const [forum,newForum]=useState([]);
  const dispatch = useDispatch();
  const formlist = useSelector((state)=> state);
  const db = firebase.firestore();

  useEffect(()=>{
    async function fetch(){
    const data = await db.collection('forums').get();
    const dataArr = data.docs.map(idx=>idx.data());
    dispatch(fetchData(dataArr));
    }
    //console.log('form list',formlist);
    fetch();
  },[]); 
  
  
  return (
    <div>
      
        <Switch >
          <Route exact path='/' component={Home} />
          <Route exact path='/admin/add' component={Form}/>
          <Route exact path='/admin' component={Admin}/>
          <Route exact path='/login' component={LoginForm}/>
          <Route exact path='/signup' component={Signup}/>
          <Route exact path='/forum/edit/:id' component={EditForum}/>}/>
          <Route exact path='/forum/:id' component={ForumItem}/>
          <Route exact path='/stock' component={Stock}/>
        </Switch> 
     
    </div>
  );
}

export default (App);
