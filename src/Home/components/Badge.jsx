import React from 'react'
import '../style.css';

const Badge = ({modalidade, onClick}) => {

    return (
        <div className='badge' onClick={onClick}>
            {modalidade.nome}
        </div>
    );

}
export default Badge;
