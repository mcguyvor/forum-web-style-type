import React from 'react';
const ForumItem =({forums,setForums})=>{
    console.log('test',forums)
    return(
        <div>
            {forums.length>0 && forums.map((idx)=>{
                return(
                    <div className='card'>
                       <div className='body'>
                        <h5 className='card-title'>{idx.title}</h5>
                        <p className='card-title'>{idx.detail}</p>
                       </div>
                    </div>
                );
            } 
                )}
        </div>
    );
}
export default ForumItem;