import { Link } from 'react-router-dom';
import React from 'react';

const Button = ({ label, onClick, className, style, to }) => {
  if (to) {
    return (
      <Link to={to} className={className} style={style}>
        {label}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={className} style={style}>
      {label}
    </button>
  );
};

export default Button;
