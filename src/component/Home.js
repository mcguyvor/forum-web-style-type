import React from 'react';
import Nav from '../component/Nav';
import {useSelector,useState} from 'react-redux';
import moment from 'moment';
const Home=()=>{
    const list = useSelector(state=>state.formList);
    console.log('list',list);
    const renderHome=()=>{
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