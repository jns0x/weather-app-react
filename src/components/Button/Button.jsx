import React from 'react';
import classNames from 'classnames';
import { func, string } from 'prop-types';
import './Button.scss';



const Button = (props) => {
  const { handleClick, cn, label } = props;

  const btnClasses = classNames({
    'btn': true,
    'upArrow': cn === 'desc' ? true : false,
    'downArrow': cn === 'asc' ? true : false,
    'btn--search': cn === 'btn--search' && true
  })

  return (
    <button onClick={handleClick} className={btnClasses}>{label}</button>
  )
}

Button.propTypes = {
  handleClick: func.isRequired,
  cn: string,
  label: string.isRequired
}

export default Button;
