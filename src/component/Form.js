import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addForm} from '../action/index';
//import Select from 'react-select';
//import makeAnimated from 'react-select/animated';// https://react-select.com/home
const Form=()=>{
    const [input,setInput]=useState('');
    //For useDispatch function and store action  in const 
    const dispatch = useDispatch();
    const submitForm=(input)=>dispatch(addForm(input));
   // const submitForm = useDispatch((input)=> addForm(input)); //then use addForm inside the handleSubmit

    const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
    }
   // const animatedComponents= makeAnimated();
    const handleSubmit=(e)=>{
       // const currentDate = new Date(); move to formReducer
        e.preventDefault();
        submitForm({input})
       // move to Formreducer newForum([...forum,{input,forumId:uuid(),publishTime : currentDate}]);
        e.target.reset();
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
                <input type='text' name='title'id='title'onChange={handleChange}/>
               
                <label htmlFor='detail'>Detail</label>
                <input type='text' name='detail' id='detail' onChange={handleChange}/>
               
                <label htmlFor='category'>Category</label> 
                    <select name ='category'onChange={handleChange}>
                       {options.map(idx=>{return(<option value={idx.value}>{idx.label}</option>);})}
                    </select>
                <label htmlFor='by'>By</label>
                <input type='text' name='user' id='by' onChange={handleChange}/>
                
               
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
}
export default Form;