import React from "react";
import UserItem from "./UserItem";
import "./UserList.css";

const UserList = (props) => {
  let userDatarecord = props.UserListItem;
  //   console.log(userDatarecord);
  return (
    <div>
      {userDatarecord.length > 0
        ? userDatarecord.map((item) => {
            return <UserItem name={item.name} age={item.age} key={item.name+Math.random()}></UserItem>;
          })
        : console.log("koochik")}
    </div>
  );
};

export default UserList;
