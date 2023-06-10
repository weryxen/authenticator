import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/login");
  };
  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleClick}>Sing In</button>
    </div>
  );
};

export default HomePage;
