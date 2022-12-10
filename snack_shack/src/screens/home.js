import * as React from 'react';
import Logo from '../images/logo.png';
import '../css/home.css';

const Home = () => {

    

    return (
            <div id="home">

                <div id="page-wrap">

                    <div id="header">
                        <a href='/'><img src={Logo} className="logo" />  </a>
                        <h2 className="home-text">Navigate to the sidebar to start snacking!</h2>
                    </div> 

                    <div className="flex-grid">
                        <div className="content-box" id='content1'>
                            <h1>Get Started</h1>
                        </div>  

                        <div className="content-box" id='content2'>
                            <h1>Check Rewards</h1>
                        </div>  

                        <div className="content-box" id='content3'>
                            <h1>Get Connected</h1>
                        </div>  
                        
                        <div className="content-box" id='content4'>
                            <h1>Profile</h1>
                        </div> 
                    </div>

                </div>

            </div>
    );
}

export default Home;
