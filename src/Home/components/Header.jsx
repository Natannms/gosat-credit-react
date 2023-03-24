import React from 'react'

import Button from '../../hooks/Button';

const Header = () => {

    return (
        <div className='header'>
            <ul className='menu-ul'>
                <li>
                   <h1 className='app-name'>GOSAT CREDITS</h1>
                </li>
                <li>
                    <Button title="ENTRAR" onClick={()=>alert('teste')}/>
                </li>
            </ul>
        </div>
    );

}
export default Header;
