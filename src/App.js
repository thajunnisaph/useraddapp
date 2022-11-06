import React, {useState,Fragment} from 'react';
import AddUser from './Components/Users/AddUser';
import './index.css';
import UserList from './Components/Users/UserList';


function App() {
   const [UsersList,SetUserList]=useState([]);
  const UserHandler=(UName,Age,Clg) =>{
 SetUserList((prevState) =>{
return [...prevState,{name:UName, age:Age, clgname:Clg, id:UName+Age}];
 })
  }
  return (
    <Fragment>
     <AddUser  AddUser={UserHandler}/>
     <UserList  Users={UsersList} /> 
    </Fragment>
  );
}

export default App;
