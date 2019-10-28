import React from 'react';
import {useSelector} from 'react-redux';
const ForumItem =()=>{
    const formList = useSelector((state)=>state.formList); // connect redux state object to local const
    return(
        <div>
            {formList.length>0 && formList.map((idx)=>{
                const publishDate = idx.publishime;
                const detail = idx.detail; 
                return(
                    <div className='card'>
                       <div className='body'>
                        <h5 className='card-title'>{detail.title}</h5>
                        <p className='card-title'>{detail.detail}</p>
                        <p>{detail.user}</p>
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