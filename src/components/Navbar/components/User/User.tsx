import React from "react";
import UserImg from "../../../../assets/images/image-avatar.png";

const User: React.FC = () => (
  <div className="user">
    <img src={UserImg} alt="User" className="h-12 w-12" />
  </div>
);

export default User;
