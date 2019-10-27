import React,{useState} from 'react';
import './App.css';
import Nav from './component/Nav';
import Form from './component/Form';
function App() {
  const [forum,newForum]=useState([]);
  return (
    <div className="App">
      <Form forum={forum} newForum={newForum}/>
      
    </div>
  );
}

export default App;
