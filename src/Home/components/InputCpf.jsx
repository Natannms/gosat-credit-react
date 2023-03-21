import React from 'react'
import '../style.css';

const InputCpf = ({options}) => {
    const {cpf, handleChangeCpf, getOpportunitiesList, viewOpportunities} = options

    return (
        <div className='input-group pl-4'>
            <label className='text-white text-1xl label'>Cpf:</label>
            <input className='input-cpf' type='text' placeholder='000.000.000-00' value={cpf} onChange={handleChangeCpf}/>
            <button className='button-search' onClick={getOpportunitiesList}>
                {viewOpportunities ? 'Buscar novamente' : 'Buscar'}</button>
        </div>
    );

}
export default InputCpf;
