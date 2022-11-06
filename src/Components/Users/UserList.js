import React from "react";
import Card from "../UI/Card";
import classes from "./UserList.module.css";
const UserList = (props) => {
  return (
    <Card  className={classes.users}>

        <ul>
          {props.Users.map((user) => {
            return (
              <li key={user.id}>
                {user.name} ({user.age} Years old) - {user.clgname}
              </li>
            );
          })}
        </ul>
      
    </Card>
  );
};
export default UserList;
