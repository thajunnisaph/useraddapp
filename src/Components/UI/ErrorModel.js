import React from "react";
import ReactDOM from "react-dom"
import Button from "./Button";
import Card from "./Card";
import classes from "./ErrorModel.module.css";
const Backdrop = (props) =>{
return  <div className={classes.backdrop} onClick={props.onConfirm} />
}
const ModalOverLay = (props) =>{
    return ( <Card className={classes.modal}>
    <header className={classes.header}>
      <h2>{props.title}</h2>
    </header>
    <div className={classes.content}>
      <p>{props.msg}</p>
    </div>
    <footer className={classes.actions}>
      <Button onClick={props.onConfirm}>Okay</Button>
    </footer>
  </Card>
    );
}
const ErrorModel = (props) => {
  return (
    <React.Fragment>
     {ReactDOM.createPortal(<Backdrop onConfirm={props.onConfirm}/>,document.getElementById("backdrop-root"))}
      {ReactDOM.createPortal(<ModalOverLay title={props.title} msg={props.msg} onConfirm={props.onConfirm}/>,document.getElementById("overlay-root"))}
    </React.Fragment>
  );
};
export default ErrorModel;
