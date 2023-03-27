import React, { useState } from 'react'
const Card = ({onClick, className , options }) => {
    return (
        <div onClick={onClick} className={className}>

            <div className='card-header'>
                <h1 className='card-title'>{options.instituicao}</h1>
            </div>
        </div>
    );

}
export default Card;
