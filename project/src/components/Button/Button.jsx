import React from "react";

const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>{" "}
      {/* 보여주기만 하는 부분은 children으로 직관적으로 작성가능  */}
    </>
  );
};

export default Button;
