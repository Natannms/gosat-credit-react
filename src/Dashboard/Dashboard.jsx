import React from 'react'
import Card from './components/Card';

const Dashboard = ({dashboardOptions}) => {
    const {contracts} = dashboardOptions

    console.log("CARD CONTRACT", contracts);
    return (
        <div className='bg-primary w-screen h-screen '>
            <div className="contracts">
                <div className="">
                    {/* map from contracts */}
                    {contracts.map((contract, index) => {
                        return (
                            <Card
                                key={index}
                                className="contract"
                                options={contract}
                            />
                        )
                    })}
                    {/* <div className="contract">
                        <div className="contract-header">
                            <p className="contract-title">Contrato 1</p>
                            <p className="contract-status">Pendente</p>
                        </div>
                        <div className="contract-body content-row justify-content-center">
                            <div className="contract-body-row bg-white w-96 content-col items-center mr-2">
                                <p className="contract-body-title"><strong>Instituição</strong>: <span>Financeira Assert</span></p>
                                <p className="contract-body-title"><strong>Valor</strong> : <span>R$ 3.000,00</span></p>
                                <p className="contract-body-title"><strong>Parcelas</strong> : <span>12</span></p>
                                <p className="contract-body-title"> <strong>Juros</strong>: <span>3,65%</span></p>
                            </div>
                            <div className="contract-offer-data-body-row bg-third w-96">

                                <hr />
                                <p className="contract-offer-data-body-title">Parcela Maxima:</p>
                                <p className="contract-offer-data-body-value">48</p>
                                <hr />
                                <p className="contract-offer-data-body-title">Parcela Minima:</p>
                                <p className="contract-offer-data-body-value">12</p>
                                <hr />
                                <p className="contract-offer-data-body-title">Valor Maximo:</p>
                                <p className="contract-offer-data-body-value">R$ 7.000,00</p>
                                <hr />
                                <p className="contract-offer-data-body-title">Valor Minimo:</p>
                                <p className="contract-offer-data-body-value">R$ 3.000,00</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    );

}
export default Dashboard;
