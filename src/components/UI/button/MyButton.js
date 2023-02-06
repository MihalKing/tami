import React from 'react';

import './MyButton.css'

const MyButton = ({children, ...props}) => {
    return (
        <button {...props} className='myBth'>
            {children}
        </button>
    );
};

export {MyButton};