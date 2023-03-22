import React from 'react'

const Button = ({title, onClick, className}) => {

    return (
        <div className={className} onClick={onClick}>
            {title}
        </div>
    );

}
export default Button;
