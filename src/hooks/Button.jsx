import React from 'react'
const Button = ({title, onClick, className, icon}) => {

    return (
        <div className={className} onClick={onClick}>
            <p className="title">
                {title}
            </p>
            <div className="icon">
                {icon}
            </div>
        </div>
    );

}
export default Button;
