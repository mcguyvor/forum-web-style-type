import React,{useState} from 'react';
import './App.css';
import Nav from './component/Nav';
import Form from './component/Form';
import ForumItem from './component/ForumItem';
function App() {
  const [forum,newForum]=useState([]);
  return (
    <div className="App">
      <Form forum={forum} newForum={newForum}/>
      <ForumItem/>
    </div>
  );
}

export default App;
