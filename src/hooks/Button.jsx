import React from 'react'

const Button = ({title, onClick}) => {

    return (
        <div onClick={onClick}>
            {title}
        </div>
    );

}
export default Button;
