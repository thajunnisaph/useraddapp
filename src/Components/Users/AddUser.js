import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModel from "../UI/ErrorModel";
import Wrapper from "../Helpers/Wrapper";
const AddUser = (props) => {
  const nameref   =  useRef();
  const ageref    = useRef();
  
   const [Error,SetError] = useState();
  
    
  
  const AddUserHandler = (event) => {
    event.preventDefault();
    const refenteredname=nameref.current.value;
    const refenteredage=ageref.current.value;
    if(refenteredname.trim().length ===0 || refenteredage.trim().length ===0){
      SetError({
        title:'Invalid Input',
        msg:'please enter a valid name and age.'
      })
        return;
    }
    if(+refenteredage<1){

      SetError({
        title:'Invalid Age',
        msg:'please enter a age greater than 0.'
      })
        return;
    }
    console.log(refenteredname,refenteredage);
    props.AddUser(refenteredname,refenteredage);
    nameref.current.value='';
    ageref.current.value='';
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
          <input type="text" id="username"  ref={nameref}></input>
          <label htmlFor="age">Age (Years)</label>
          <input type="number" id="age" ref={ageref}></input>
          <Button type="submit">Add User </Button>
        </form>
    </Card>
    </Wrapper>
  );
};
export default AddUser;
