import React,{useState,useEffect} from 'react';
import Nav from '../component/Nav';
import firebase from '../firebase';
const EditForum =(props)=>{
    const options = [
        { value: 'food', label: 'Food' },
        { value: 'Politic', label: 'Politic' },
        { value: 'Financial', label: 'Financial' }
      ];
    const initialValue = {category:'none'};
    const [input,setInput]=useState(initialValue); 
    const [fetch,setFetch] = useState(false);//for showing form when fetch finish
    const db = firebase.firestore();

    useEffect(async()=>{
    const forumId = props.match.params.id; //store the params from react router in const forumId then use it as argument insude doc parameter
    const data = await db.collection('forums').doc(forumId).get();
    setInput(data.data()); //use data() to get data inside data response from above line
    setFetch(true);
    console.log(data.data());
    },[]);

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        console.log(input);
        
    }
    const handleSubmit=()=>{

    }
    const editForum =()=>{
        return(
            <div className='form-group '>
                <form onSubmit={handleSubmit} >
                <label htmlFor='title' className='title'>Title</label>
                <input type='text'  name='title'id='title' onChange={handleChange} value={input.value.title}/>
               
                <label htmlFor='detail' className='title'>Detail</label>
                <input type='text' name='detail' id='detail' onChange={handleChange}/>
               
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
                <input type='text' name='user' id='by' onChange={handleChange}/>
                
                <label htmlFor='img' className='title'>Image url</label>
                <input type='text' name='imgUrl' id='img' onChange={handleChange}/>
                
                <button type='submit' className='btn btn-info title'>Save change</button>
            
                </form>
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