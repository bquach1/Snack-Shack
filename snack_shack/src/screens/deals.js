import * as React from 'react';
import Logo from '../images/logo.png';
// import '../css/home.css';

const Deals = () => {
 
    return (
            <div id="deals"> 

                <div id="page-wrap">

                    <div id="header">
                        <a href='/'><img src={Logo} className="logo" />  </a>
                        <h2 className ="home-text">Snack Shack Daily Deals</h2>
                    </div>

                </div>

            </div>
    );
}

export default Deals;
