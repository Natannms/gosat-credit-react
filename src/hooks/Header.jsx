import React from 'react'

import Button from './Button';

const Header = ({headerOptions}) => {
    const {setViewLogin, cancelAllViews, viewDashboard} =  headerOptions
    return (
        <div className='header'>
            <ul className='menu-ul'>
                <li>
                   <h1 className='app-name'>GOSAT CREDITS</h1>
                </li>
                {!viewDashboard &&
                    <li className='cursor-pointer'>
                        <Button className="btn btn-secondary bg-secondary " title="ENTRAR" onClick={()=>{
                            cancelAllViews()
                            setViewLogin(true)
                        }}/>
                    </li>
                }
            </ul>
        </div>
    );

}
export default Header;
