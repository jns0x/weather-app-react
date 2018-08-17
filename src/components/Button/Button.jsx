import React from 'react';
import './Button.scss';


const Button = props => {
  return (
    <button onClick={props.handleClick} className={props.cn}>{props.label}</button>
  )
}

export default Button;
