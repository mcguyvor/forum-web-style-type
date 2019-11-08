//import * as firebaseui from 'firebaseui'
import React,{useState,useEffect} from 'react';
import {useDispatch} from 'react-redux';
import firebase from '../firebase';
require('firebase/auth')

const LoginForm=()=>{
    const initial = {
        email: '',
        password: '',
        currentUser: null,
        message: ''
      }
    const[loginForm,setLoginForm] = useState(initial);
    useEffect(()=>{
        firebase.auth().onAuthStateChanged(user=>{
            if(user){
                setLoginForm({
                    currentUser:user
                })
            }
        })
    },[]);
    
    const logout=(e)=>{
            e.preventDefault();
            firebase.auth().signOut().then(response=>{
                setLoginForm({
                    currentUser:null
                })
            })
    }
    const handleChange=(e)=>{
        setLoginForm({...loginForm,
            [e.target.name]: e.target.value
        });
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        const {email,password} = loginForm;
        firebase.auth() //import firebase so i need to .auth
        .signInWithEmailAndPassword(email, password)
        .then(response => {
        setLoginForm({
          currentUser: response.user
        })
        })
        .catch(error => {
        setLoginForm({
          message: error.message
        })
        })

    }

    if (loginForm.currentUser) {
        return (
          <div>
            <p>Hello {loginForm.currentUser.email}</p>
            <button onClick={logout}>Logout</button>
          </div>
        )
      }
    return(
        <div>
            <section className="section container">
            <div className="columns is-centered">
            <div className="column is-half">
                <h1>Welcome to Blog something</h1>
                
                <form className='mt-5' onSubmit={handleSubmit}>
                <div className="field">
                    <label className="label">Email</label>
                    <div className="control">
                    <input className="input" type="email" name="email" onChange={handleChange} />
                    </div>
                </div>

                <div className="field">
                    <label className="label">Password</label>
                    <div className="control">
                    <input className="input" type="password" name="password" onChange={handleChange}/>
                    </div>
                </div>

                {loginForm.message ? <p className="help is-danger">{loginForm.message}</p> : null}

                <div className="field is-grouped">
                    <div className="control">
                    <button className="button is-link">Login</button>
                    </div>
                    <div className="control">
                    <button className="button is-text">Cancel</button>
                    </div>
                </div>
                </form>
            </div>
            </div>
        </section>
    </div>
    );

}
export default LoginForm;