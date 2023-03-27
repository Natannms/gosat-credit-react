import React from 'react'
import InputGroup from '../hooks/InputGroup'
import Button from '../hooks/Button'
const Contract = ({ contractOptions }) => {
    const { name, email, password, cpf, hireQntInstallments,
        hireValue, handleChangeName, handleChangeEmail, handleChangePassword, handleChangeDocument, requestData, handleChangeHireValue, handleChangeHireQntInstallments, handleRequestHireLoan, viewError, messageError, messageSuccess } = contractOptions

    return (
        <div className='contract-content bg-primary content-row justify-center items-center p-2'>
            {!messageSuccess &&
                <div className="form">
                    <div className="title content-row justify-center">Registre-se</div>
                    <div className="subtitle mt-4 mb-2">Finzalize seu registro para solicitar seu crédito agora.</div>
                    {viewError &&
                        <div className="error bg-third p-1 rounded-10 text-white alertEffect">
                            <div className="error-message content-row justify-between p-1">
                                <div className="error-message-text">
                                   <span>{messageError}</span>
                                </div>
                            </div>
                        </div>
                    }
                    <InputGroup  label="Nome" inputType="text" styles="input input-name" value={name} onChange={(e) => handleChangeName(e)} />

                    <InputGroup  label="CPF" inputType="text" styles="input input-document" value={cpf} onChange={(e) => handleChangeDocument(e)} />

                    <InputGroup  label="Email" inputType="text" styles="input input-email" value={email} onChange={(e) => handleChangeEmail(e)} />

                    <InputGroup label="Senha" inputType="password" styles="input input-password" value={password} onChange={(e) => handleChangePassword(e)} />

                    <p>
                        Valor selecionado: <sup style={{ fontWeight: "bold", color: "green" }}>$ </sup>
                        <span style={{ fontWeight: "bold" }}>{hireValue ? hireValue : requestData.offer_value_min}</span>
                    </p>

                    <InputGroup
                        small={`Selecione um valor ${requestData.offer_value_min} e ${requestData.offer_value_max}`} label="Valor de crédito"
                        inputType="range"
                        min={requestData.offer_value_min}
                        max={requestData.offer_value_max}
                        styles="slider"
                        value={hireValue}
                        onChange={(e) => handleChangeHireValue(e)}
                    />
                    <p>
                        Quantidade de Parcelas: <span style={{ fontWeight: "bold" }}>{!hireQntInstallments ? requestData.offer_qnt_installments_min : hireQntInstallments}</span>
                    </p>

                    <InputGroup
                        small={`Selecione a quantidade de parcelas ${requestData.offer_qnt_installments_min}x e ${requestData.offer_qnt_installments_max}x`} label="Parcelas"
                        inputType="range"
                        min={requestData.offer_qnt_installments_min}
                        max={requestData.offer_qnt_installments_max}
                        styles="slider"
                        value={requestData.hire_qnt_installments}
                        onChange={(e) => handleChangeHireQntInstallments(e)}
                    />



                    <div className="content-row justify-center">
                        <Button title="Solicitar crédito" className="btn btn-secondary bg-secondary justify-center w-96 mt-4" onClick={() => handleRequestHireLoan()} />
                    </div>
                </div>
            }

            {messageSuccess &&
                <div className="success bg-third p-1 rounded-10 text-white alertEffect-2">
                    <div className="success-message content-row justify-between p-1">
                        <div className="success-message-text">
                            <span>{messageSuccess}</span>
                        </div>
                    </div>
                </div>
            }
        </div>
    );

}
export default Contract;
