import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addForm} from '../action/index';
import firebase from '../firebase'
//import Select from 'react-select';
//import makeAnimated from 'react-select/animated';// https://react-select.com/home
const Form=()=>{
    const initialValue = {category:'none'};
    const [input,setInput]=useState(initialValue);   
    //For useDispatch function and store action  in const 
    const dispatch = useDispatch();
    const submitForm=(input)=>dispatch(addForm(input)); //use dispatch from above
   // const submitForm = useDispatch((input)=> addForm(input)); //then use addForm inside the handleSubmit
    const [finish,setFinish] = useState(false);
    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        console.log(input);
    }

    const handleImgChange=(e)=>{ //not working need to fix
        setInput({...input,file:e.target.files[0]});
        console.log(input); 
    }
   // const animatedComponents= makeAnimated();
    const handleSubmit=(e)=>{
       // const currentDate = new Date(); move to formReducer
        e.preventDefault();
        submitForm(input)
        
       // move to Formreducer newForum([...forum,{input,forumId:uuid(),publishTime : currentDate}]);
       e.target.reset(initialValue);
       setInput('');// put initial value for select category to none
       console.log(input.title)
       setFinish(true);
    }
    const options = [
        { value: 'food', label: 'Food' },
        { value: 'Politic', label: 'Politic' },
        { value: 'Financial', label: 'Financial' }
      ]
      
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <label htmlFor='title'>Title</label>
                <input type='text'  name='title'id='title' onChange={handleChange}/>
               
                <label htmlFor='detail'>Detail</label>
                <input type='text' name='detail' id='detail' onChange={handleChange}/>
               
                <label htmlFor='category'>Category</label> 
                    <select name ='category'onChange={handleChange} value={input.category}>
                        <option>Select</option>
                       {options.map(idx=>{
                           return(
                           <option value={idx.value}>{idx.label}</option>
                           );
                           })}
                    </select>
                <label htmlFor='by'>By</label>
                <input type='text' name='user' id='by' onChange={handleChange}/>
                
                <label htmlFor='img'>Image url</label>
                <input type='text' name='imgUrl' id='img' onChange={handleChange}/>
                
                <button type='submit'>Submit</button>
            </form>
            {finish? <div>
                        <h3>Add done</h3>
                        <button className='btn'><a href='/admin'>Return to Admin</a></button>
                    </div>

            : null}
            
        </div>
    );
}
export default Form;