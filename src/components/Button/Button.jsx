import React from 'react';
import { func, string } from 'prop-types';
import './Button.scss';


const Button = (props) => {
  const { handleClick, cn, label } = props;
  return (
    <button onClick={handleClick} className={cn}>{label}</button>
  )
}

Button.propTypes = {
  handleClick: func.isRequired,
  cn: string.isRequired,
  label: string.isRequired
}

export default Button;
