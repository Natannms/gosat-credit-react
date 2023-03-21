import React from 'react'
import '../style.css';
import Card from './Card';
import InputCpf from './InputCpf';

const AboveTheFold = ({options}) => {
    const {cpf, handleChangeCpf, getOpportunitiesList, opportunities} = options
    return (
        <div className='AboveTheFold'>
            <h1 className='app-name text-3xl pt-2 pl-4'>Gosat Credits</h1>
            {opportunities && opportunities.map((op)=>{
                return <Card opportunity={op}/>
            })}

            {!opportunities &&
                <p className='text-primary text-1xl w-204 pl-4'>Não deixe para depois o pagamento daquele boleto ou a quitação de suas dívidas. Aproveite as inúmeras oportunidades de crédito disponíveis agora mesmo através do nosso incrível aplicativo, Gosat Credits!</p>
            }

            <InputCpf options={{cpf, handleChangeCpf, getOpportunitiesList}}/>
        </div>
    );

}
export default AboveTheFold;
