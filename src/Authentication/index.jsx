import React from 'react'
import Button from '../hooks/Button';
import InputGroup from '../hooks/InputGroup';

const Authentication = ({AuthOptions}) => {

    const { email, password, handleChangeEmail, handleChangePassword, login } = AuthOptions
    return (
        <div className='bg-primary w-screen h-screen content-row'>
            <div className="boxLogin bg-secondary w-204 items-center content-col">
                <h1 className="">Login</h1>
                <div className="form">
                    <InputGroup inputType="email" styles="input input-name" label="Email" value={email}  onChange={(e) => handleChangeEmail(e)}/>
                    <InputGroup inputType="text" styles="input input-name" label="Senha" value={password} onChange={(e) => handleChangePassword(e)}/>

                    <div className="content-row justify-center">
                        <Button title="Entrar" className="btn btn-primary bg-primary justify-center w-96 mt-4" onClick={() => login()} />
                    </div>
                </div>
            </div>
        </div >
    );

}
export default Authentication;
