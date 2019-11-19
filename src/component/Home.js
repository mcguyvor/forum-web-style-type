import React,{useEffect,useState} from 'react';
import Nav from '../component/Nav';
import {useSelector,useDispatch} from 'react-redux'; 
import moment from 'moment';
import {deleteItem} from '../action/index';
import {withRouter} from 'react-router-dom'; //to use history push to naciagate to new path


const Home=({history})=>{
    const list = useSelector(state=>state.formList);
    const dispatch = useDispatch(); //create function dispatch from useDispatch hook
    const deleteAction =(forumId)=>dispatch(deleteItem(forumId)); //for deleteAction send to action/index
    const onEditForum = forumId =>  history.push('/forum/edit/'+ forumId);
    const readFullForum = forumId =>  history.push('/forum/'+ forumId);
    console.log('list',list);
    
    const[loading,setLoad]=useState(false);

    
   

    const renderHome=()=>{ // Edit , Delete button need to move to admin page DON'T FORGET!!!!!!!!!!!!!!!!!!!
        return(
            <div className='container mt-5'>
            <div className='card-columns'>
            {list.length>0 ? list.map(idx=>(
                    <div className='card  border-light mb-3'>
                        <div className="card-header">{idx.title}</div>
                        {idx.imgUrl!==undefined? <img src={idx.imgUrl} alt={idx.imgUrl} className='card-img-top'/>: null}
                        <div className="card-body">
                            <h5 className="card-title">{idx.title}</h5>
                            <p className="card-text">{idx.detail}</p>
                            <p className="card-text"><small class="text-muted">{moment(idx.publishtime).subtract(10, 'days').calendar()}</small></p>
                            <button className="btn btn-primary" onClick={()=>readFullForum(idx.formId)}>Read article</button>
                            
                        </div>
                    </div>
                
            ) 
            ): <h1>Loading</h1>
            }
            </div>
            </div>
        )
    }
        return(
            <div>
                <Nav/>
                {renderHome()}
            </div>
        );
    
}
export default withRouter(Home);