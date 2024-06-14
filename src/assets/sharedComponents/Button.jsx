import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'

function Button({ children, to, onClick, type='button', variant='cta', className='', ...props }) {
    //Base classes to be used in all buttons
    const baseClasses = 'inline-block text-center py-2 px-4 rounded';
    //Classes specific to button variants in this project
    const variantClasses = {
        cta: 'bg-pBrown text-white hover:bg-pDarkBrown',
        cta2: 'text-pBlack hover:bg-pBlack hover:text-white',
        shop: 'bg-none border-none text-pBlack2 font-medium  hover:text-pBrown trasition duration-300',
        increment: 'bg-green-500 text-white hover:bg-green-700',
        decrement: 'bg-red-500 text-white hover:bg-red-700',
        checkout: 'bg-black text-white hover:bg-gray-800',
    };
    //combine base and variant classes
    const classes = `${className} ${baseClasses} ${variantClasses[variant]} `;
    //if to is provided, render a Link component
    if (to) {
        return (
        <Link to={to} className={classes} {...props}>
            {children}
        </Link>
        );
    }
    //else, render a button component
    return (
        <button type={type} onClick={onClick} className={classes} {...props}>
        {children}
        </button>
    );
}
//prop types for checking types
Button.propTypes = {
    children: PropTypes.node.isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['cta','cta2','shop', 'increment', 'decrement', 'checkout']),
    className: PropTypes.string,
  };
  

export default Button