import React from "react";
import "./UserItem.css"
const UserItem = (props) => {
  return (
    <div className="user__container">
      <p>{props.name}</p>
      <p>{props.age}</p>
    </div>
  );
};

export default UserItem;
