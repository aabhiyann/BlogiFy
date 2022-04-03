import React, { useEffect } from "react";
import "./alert.css";

const Alert = ({ props, removeAlert }) => {
  const { type, msg } = props;

  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert();
    }, 3000);
    return () => clearTimeout(timeout);
  }, []);

  return <p className={`alert`}>{msg}</p>;
};

export default Alert;
