import React,{useState} from 'react';
import {useDispatch} from 'react-redux';
import {addForm} from '../action/index';
//import Select from 'react-select';
//import makeAnimated from 'react-select/animated';// https://react-select.com/home
const Form=()=>{
    const initialValue = {title:'',detail:'',category:'',imgUrl:'',user:''};
    const options = [
        { value: 'food', label: 'Food' },
        { value: 'Politic', label: 'Politic' },
        { value: 'Financial', label: 'Financial' }
      ];
      //form validator
    const initialValidate= {titleError:'',detailError:'', categoryError:'',
            userNameError:'', imgUrlError:''};
    // input state
    const [input,setInput]=useState(initialValue);   
    //form finish indicator
    const [finish,setFinish] = useState(false);
    //error message form validator
    const [errorMessage,setError] =useState(initialValidate);

    //For useDispatch function and store action  in const 
    const dispatch = useDispatch();
    const submitForm=(input)=>dispatch(addForm(input)); //use dispatch from above
   // const submitForm = useDispatch((input)=> addForm(input)); //then use addForm inside the handleSubmit
   
   const handleChange=(e)=>{
        setInput({...input,[e.target.name]:e.target.value});
        console.log(input);
    }

    const handleImgChange=(e)=>{ //not working need to fix
        setInput({...input,file:e.target.files[0]});
        console.log(input); 
    }

    const handleFormSubmit=(e)=>{
       // const currentDate = new Date(); move to formReducer
        //validate form before submit
        e.preventDefault();
        const isValid = validateForm();
        console.log(isValid);
        if(isValid){
            submitForm(input)
            // move to Formreducer newForum([...forum,{input,forumId:uuid(),publishTime : currentDate}]);
            //e.target.reset(initialValue);
            setInput('');// put initial value for select category to none
            console.log(input.title)
            setFinish(true);
        }
    }

    //validate form
    const validateForm=()=>{

        let titleError ='';
        let detailError ='';
        let categoryError='';
        let userNameError='';
        let imgUrlError ='';
        const numbers =/^[-+]?[0-9]+$/;
        const letters = /^[A-Za-z]+$/;
        const url = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi; 
        
        if(!input.title){
            titleError='Title Field can not be empty';
        }
        if((input.title.length>80)){
            titleError='Title can not be longer than 80 characters';
        }
        if(!input.detail){
            detailError='Detail field can not be empty';
        }
        if(!input.category){
            categoryError='Please select category';
        }
        if(!input.imgUrl.match(url)){
            imgUrlError='Please enter the valid url';
        }
        if(!input.user){
            userNameError='Please enter Admin name'
        }
    //set state of the error 
        if(titleError||detailError||categoryError||userNameError||imgUrlError){
            
            setError({...errorMessage, titleError:titleError, detailError:detailError, categoryError:categoryError,
            userNameError:userNameError, imgUrlError:imgUrlError});
            return false;
        
        }else{
            return true;
        }
    }

   
      
    return(
        <div className='container mt-4'>
            
            <form onSubmit={handleFormSubmit} >
                
                <div className ='form-row mb-2'>
                    <div className='col-6 '>
                        <label htmlFor='title'>Title</label>
                        <input className='form-control' type='text' name='title' id='title' onChange={handleChange} placeholder='No longer than 80 character' />
                            <div style={{ fontSize: 12, color: "red" }}>
                                {errorMessage.titleError}
                            </div>
                    </div>                  
                </div>

                <div className='form-row mb-2'>
                    <div className='col-12'>
                        <label htmlFor='detail'>Detail</label>
                        <textarea className='form-control' rows="10" type='text' name='detail' id='detail' onChange={handleChange} placeholder='Detail'/>   
                        <div style={{ fontSize: 12, color: "red" }}>
                                {errorMessage.detailError}
                            </div>
                    </div>
                </div>
                
                <div className='form-row mb-2'>
                    <div className='col-1'>
                        <label htmlFor='category'>Category</label> 
                            <select className='custom-select' name ='category'onChange={handleChange} value={input.category} >
                                <option>Select</option>
                                    {options.map(idx=>{
                                        return(
                                        <option value={idx.value}>{idx.label}</option>
                                                );
                                            })
                                    }
                            </select>
                            <div style={{ fontSize: 12, color: "red" }}>
                                {errorMessage.categoryError}
                            </div>
                            
                    </div>
                </div>

                <div className='form-row mb-2'>
                    <div className='col-4'>
                        <label htmlFor='by'>By</label>
                        <input className='form-control' type='text' name='user' id='by' onChange={handleChange} />
                        <div style={{ fontSize: 12, color: "red" }}>
                                {errorMessage.userNameError}
                            </div>
                    </div>
                   
                    <div className='col-8'>
                        <label htmlFor='img'>Image url</label>
                        <input className='form-control' type='text' name='imgUrl' id='img' onChange={handleChange} placeholder='IMG URL' />
                        <div style={{ fontSize: 12, color: "red" }}>
                                {errorMessage.imgUrlError}
                            </div>
                    </div>     
                </div>
                
                <button className='btn btn-outline-primary' type='submit'>Submit</button>
            </form>


            {finish? <div className='mt-4'>
                        <h3>Add done</h3>
                        <button className='btn mt-3'><a href='/admin'>Return to Admin home page</a></button>
                    </div>

            : null}
            
        </div>
    );
}
export default Form;