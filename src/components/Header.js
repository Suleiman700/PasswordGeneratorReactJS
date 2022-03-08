import React from 'react';
import passwordicon from '../passwordicon.svg';


function Header() {
    return (
        <React.Fragment>
            <nav className="navbar navbar-dark bg-dark">
                <a className="navbar-brand mx-1" href="#">
                    <img src={passwordicon} width="30" height="30" className="d-inline-block align-top" alt=""/>
                    <span className="mx-1">Password Generator</span>
                </a>
            </nav>
        </React.Fragment>
    );
}

export default Header;
