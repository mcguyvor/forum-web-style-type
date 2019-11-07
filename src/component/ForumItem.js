import React from 'react';
import {useSelector} from 'react-redux';
import firebase from 'firebase'
const ForumItem =()=>{
    
      
    const formList = useSelector((state)=>state.formList); // connect redux state object to local const
  //  const db =  firebase.firestore();
   // db.collection('forums').get().then((snapshot)=>{
   //     console.log(snapshot);
  //  })

    return(
        <div>
            {formList.length>0 && formList.map((idx)=>{
                const publishDate = idx.publishime;
                const detail = idx.detail; 
                return(
                    <div className='card' key={idx.formId}>
                       <div className='body'>
                        <h5 className='card-title'>{detail}</h5>
                        <p className='card-title'>{detail}</p>
                        <p>{detail}</p>
                        <p>{publishDate}</p>
                       </div>
                    </div>
                );
            } 
                )}
        </div>
    );
}

export default ForumItem;