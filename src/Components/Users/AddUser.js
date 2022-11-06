import React, { useState } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const [EnteredUsername,SetEnteredUsername] = useState('');
  const [EnteredAge,SetEnteredAge] = useState('');
   const [Error,SetError] = useState();
  
    const UserNameChangeHandler = (event) =>{

    SetEnteredUsername(event.target.value);
  }
   const AgeChangeHandler = (event) =>{
    SetEnteredAge(event.target.value);
   }
  const AddUserHandler = (event) => {
    event.preventDefault();
    if(EnteredUsername.trim().length ===0 || EnteredAge.trim().length ===0){
      SetError({
        title:'Invalid Input',
        msg:'please enter a valid name and age.'
      })
        return;
    }
    if(+EnteredAge<1){

      SetError({
        title:'Invalid Age',
        msg:'please enter a age greater than 0.'
      })
        return;
    }
    console.log(EnteredUsername,EnteredAge);
    props.AddUser(EnteredUsername,EnteredAge);
    SetEnteredUsername('');
    SetEnteredAge('');
  };
  const  errorHandler =() =>{
    SetError(null);
  }
  return (
    <Wrapper>
    {Error && (<ErrorModel title={Error.title} msg={Error.msg} onConfirm={errorHandler}/>)}
    <Card className={classes.input}>
        <form onSubmit={AddUserHandler}>
          <label htmlFor="username">UserName</label>
          <input type="text" id="username"  value={EnteredUsername} onChange={UserNameChangeHandler}></input>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age"  value={EnteredAge} onChange={AgeChangeHandler}></input>
          <Button type="submit">Add User </Button>
        </form>
    </Card>
    </Wrapper>
  );
};
export default AddUser;
