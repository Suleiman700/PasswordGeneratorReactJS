import React from 'react';
import logo from "../logo.svg";
import '../App.css';


function Title() {
    return (
        <React.Fragment>
            <div className="text-center mt-5">
                <p className="text-warning font-bold">Password Generator</p>
                <p className="text-white h4">Your best choice to instantly generate secure and random passwords.</p>
            </div>
        </React.Fragment>
    );
}

export default Title;
