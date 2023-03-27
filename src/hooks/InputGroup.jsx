import React from 'react'

const InputGroup = ({label, inputType, styles, valor, onChange, min, max, small, error}) => {

    return (
        <div className='input-group'>
            <label className='label text-white text-1xl'>{label}</label>
            <input type={inputType} className={styles} value={valor} onChange={onChange} min={min} max={max}/>
            <small style={{color:"black", fontWeight:"bold"}}>{small}</small>
        </div>
    );

}
export default InputGroup;
