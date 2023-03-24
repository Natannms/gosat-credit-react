import React from 'react'
import Button from '../../hooks/Button';


const InputCpf = ({options}) => {
    const {cpf, handleChangeCpf, getOpportunitiesList, viewOpportunities} = options

    return (
        <div className='input-group pl-4'>
            <label className='text-white text-1xl label'>Cpf:</label>
            <input className='input input-cpf' type='text' placeholder='000.000.000-00' value={cpf} onChange={handleChangeCpf}/>
            <Button title={viewOpportunities ? 'Buscar novamente' : 'Buscar'} onClick={getOpportunitiesList} className="bg-primary btn-primary btn justify-center mt-4"/>
        </div>
    );

}
export default InputCpf;
