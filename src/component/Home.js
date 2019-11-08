import React from 'react';
import Nav from '../component/Nav';
import {useSelector,useState,useDispatch} from 'react-redux';
import moment from 'moment';
import {deleteItem} from '../action/index';
const Home=()=>{
    const list = useSelector(state=>state.formList);
    const dispatch = useDispatch(); //create function dispatch from useDispatch hook
    const deleteAction=(productId)=>dispatch(deleteItem(productId)); //for deleteAction send to action/index

    console.log('list',list);
    const renderHome=()=>{ // Edit , Delete button need to move to admin page DON'T FORGET!!!!!!!!!!!!!!!!!!!
        return(
            <div className='container mt-5'>
            <div className='card-columns'>
            {list.length>0 && list.map(idx=>(
                    <div className='card  border-light mb-3'>
                        <div className="card-header">{idx.value.title}</div>
                        {idx.value.imgUrl!==undefined? <img src={idx.value.imgUrl} alt={idx.value.imgUrl} className='card-img-top'/>: null}
                        <div className="card-body">
                            <h5 className="card-title">Light card title</h5>
                            <p className="card-text">{idx.value.detail}</p>
                            <p class="card-text"><small class="text-muted">{moment(idx.publishtime).subtract(10, 'days').calendar()}</small></p>
                            <a href="#" class="btn btn-primary">Read article</a>
                            <a href="#" class="btn btn-primary">Edit</a>
                            <button className='btn btn-danger' onClick={()=>deleteAction(idx.formId)}>Delete</button>
                        </div>
                    </div>
            )
            )
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
export default Home;