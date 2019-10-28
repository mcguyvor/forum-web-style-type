import React from 'react';
import {useSelector} from 'react-redux';
const ForumItem =()=>{
    const formList = useSelector((state)=>state.formList);
    return(
        <div>
            {formList.length>0 && formList.map((idx)=>{
                const input = idx.payload.input
                return(
                    <div className='card'>
                       <div className='body'>
                        <h5 className='card-title'>{input.title}</h5>
                        <p className='card-title'>{input.detail}</p>
                        <p>{input.user}</p>
                       </div>
                    </div>
                );
            } 
                )}
        </div>
    );
}

export default ForumItem;