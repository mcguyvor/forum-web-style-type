import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import Nav from '../component/Nav';
import firebase from '../firebase';
import {editForumAction} from '../action/index';
import {Link} from 'react-router-dom';
const EditForum =(props)=>{
    const options = [
        { value: 'food', label: 'Food' },
        { value: 'Politic', label: 'Politic' },
        { value: 'Financial', label: 'Financial' }
      ];

    
    const [input,setInput]=useState(''); 
    const [fetch,setFetch] = useState(false);//for showing frm when fetch finish
    const [editDone,setDone] =useState(false);

    const dispatch = useDispatch();
    
    const editSubmit = value => dispatch(editForumAction(value));
    const db = firebase.firestore();

    useEffect(async()=>{
    const forumId = props.match.params.id; //store the params from react router in const forumId then use it as argument insude doc parameter
    const data = await db.collection('forums').doc(forumId).get();
    setInput(data.data()); //use data() to get data inside data response from above line
    setFetch(true);
    console.log(data.data());
    },[]);

    function handleChange(e){
        setInput({...input,[e.target.name]:e.target.value});
        console.log(input);
        
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        editSubmit(input);
        setDone(true);
    }
    const editForum =()=>{
        return(
            <div className='form-group '>
                <form onSubmit={handleSubmit} >
                <label htmlFor='title' className='title'>Title</label>
                <input type='text'  name='title'id='title' onChange={handleChange} value={input.title}/>
               
                <label htmlFor='detail' className='title'>Detail</label>
                <input type='text' name='detail' id='detail' onChange={handleChange} value={input.detail}/>
               
                <label htmlFor='category'className='title'>Category</label> 
                    <select name ='category'onChange={handleChange} value={input.category}> 
                        <option>Select</option>
                       {options.map(idx=>{
                           return(
                           <option value={idx.value}>{idx.label}</option>
                           );
                           })}
                    </select>
                <label htmlFor='by' className='title'>By</label>
                <input type='text' name='user' id='by' onChange={handleChange} value={input.user}/>
                
                <label htmlFor='img' className='title'>Image url</label>
                <input type='text' name='imgUrl' id='img' onChange={handleChange} value={input.imgUrl}/>
                
                <button type='submit' className='btn btn-info title'>Save change</button>
            
                </form>
                {editDone? <div>
                                <h4 className='title'>Edit success !</h4>
                             <Link to='/'>Go back</Link>
                            </div>: null }
            </div>
        );
    }
    return(
        <div>
            <Nav/>
            {fetch && editForum()}
        </div>
    );
}


export default EditForum;