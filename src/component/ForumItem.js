import React,{useState,useEffect} from 'react';
import {useSelector} from 'react-redux';
import firebase from '../firebase';
import Nav from './Nav';

const ForumItem =(props)=>{
    //const formList = useSelector((state)=>state.formList); // connect redux state object to local const
  //  const db =  firebase.firestore();
   // db.collection('forums').get().then((snapshot)=>{
   //     console.log(snapshot);
  //  })
  const [state,setState] = useState('');
  const [loading,setLoading] =useState(false);
  const db = firebase.firestore();
    useEffect(async()=>{
        const forumId = props.match.params.id;
        const data = await db.collection('forums').doc(forumId).get();
        setState(data.data());
        setLoading(true);
    },[]);

    return(
        <div>
            <Nav/>
             {loading? 
                <div className='container'>
                    <img src={state.imgUrl}/>
                    <h3>{state.title}</h3>
                </div> 
                : 
                <h3>Loading...</h3>}
        </div>
       
        
    );
}

export default ForumItem;