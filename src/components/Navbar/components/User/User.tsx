import React from "react";
import UserImg from "../../../../assets/images/image-avatar.png";

const User: React.FC = () => (
  <div className="user">
    <img src={UserImg} alt="User" className="h-10 w-10 rounded-full" />
  </div>
);

export default User;
