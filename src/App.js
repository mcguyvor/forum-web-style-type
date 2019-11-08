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
function App() {
  const [forum,newForum]=useState([]);
  const dispatch = useDispatch();
  const formlist = useSelector((state)=> state);
  useEffect(async()=>{
    const db = firebase.firestore();
    const data = await db.collection('forums').get();
    const dataArr = data.docs.map(idx=>idx.data());
    dispatch(fetchData(dataArr));
    //console.log('form list',formlist);
  },[]); 
  const renderRoute=()=>(
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route exact path='/admin' component={Form}/>
      <Route exact path='/login' component={LoginForm}/>
      <Route exact path='/signup' component={Signup}/>
      <Route exact path='/forum/edit/:id' component={EditForum}/>
      <Route exact path='/forum/:id' component={ForumItem}/>
    </Switch>
    );
  
  return (
    <div>
      <BrowserRouter>
        {renderRoute()}  
      </BrowserRouter>
    </div>
  );
}

export default App;
