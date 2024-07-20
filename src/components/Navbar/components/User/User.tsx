import React from "react";
import UserImg from "../../../../assets/images/image-avatar.png";

const User: React.FC = () => (
  <div className="user">
    <img src={UserImg} alt="User"/>
  </div>
);

export default User;
