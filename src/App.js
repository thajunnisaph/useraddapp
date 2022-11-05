import React, {useState} from 'react';
import AddUser from './Components/Users/AddUser';
import './index.css';
import UserList from './Components/Users/UserList';


function App() {
   const [UsersList,SetUserList]=useState([]);
  const UserHandler=(UName,Age) =>{
 SetUserList((prevState) =>{
return [...prevState,{name:UName, age:Age, id:UName+Age}];
 })
  }
  return (
    <div>
     <AddUser  AddUser={UserHandler}/>
     <UserList  Users={UsersList} /> 
    </div>
  );
}

export default App;
