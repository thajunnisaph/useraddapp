import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/AuthContext";
import Input from './../Input/Input';
const emailreducer = (state, action) => {
  if (action.type === "emailinput") {
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if (action.type === "emailvalidation") {
    return { value: state.value, isValid: state.value.includes("@") };
  }
  return { value: "", isValid: false };
};
const pswdreducer = (state, action) => {
  if (action.type === "pswdinput") {
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if (action.type === "pswdvalidation") {
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }
  return { value: "", isValid: false };
};

const Login = () => {
  // const [enteredEmail, setEnteredEmail] = useState('');
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState('');
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const ctx2 = useContext(AuthContext);
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, emaildispatchfn] = useReducer(emailreducer, {
    value: "",
    isValid: null,
  });
  const [passwordState, pswddispatchfn] = useReducer(pswdreducer, {
    value:'',
    isValid: null,
  });
  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  // useEffect(() => {
  //   const identifier = setTimeout(() => {
  //     console.log('Checking form validity!');
  //     setFormIsValid(
  //       enteredEmail.includes('@') && enteredPassword.trim().length > 6
  //     );
  //   }, 500);

  //   return () => {
  //     console.log('CLEANUP');
  //     clearTimeout(identifier);
  //   };
  // }, [enteredEmail, enteredPassword]);

  const emailChangeHandler = (event) => {
    // setEnteredEmail(event.target.value);
    emaildispatchfn({ type: "emailinput", val: event.target.value });
    setFormIsValid(
      event.target.value.includes("@") && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    // setEnteredPassword(event.target.value);
    pswddispatchfn({ type: "pswdinput", val: event.target.value });
    setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    // setEmailIsValid(emailState.isvalid);
    emaildispatchfn({ type: "emailvalidation" });
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    pswddispatchfn({ type: "pswdvalidation" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    ctx2.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
       <Input id='email' label='E-Mail' type="email" value={emailState.value} isValid={emailState.isValid} onChange={emailChangeHandler} onblur={validateEmailHandler}></Input>
       <Input id='pswd'  label='Password' type='password' value={passwordState.value} isValid={passwordState.isValid} onChange={passwordChangeHandler} onblur={validatePasswordHandler}></Input>
            <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
