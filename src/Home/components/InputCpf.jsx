import React from 'react'
import '../style.css';

const InputCpf = () => {

    return (
        <div className='input-group pl-4'>
            <label className='text-white text-1xl label'>Cpf:</label>
            <input className='input-cpf' type='text' placeholder='000.000.000-00' />
            <button className='button-search'>Buscar</button>
        </div>
    );

}
export default InputCpf;
