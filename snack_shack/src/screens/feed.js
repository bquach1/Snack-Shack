import * as React from 'react';
import Logo from '../images/logo.png';
// import '../css/home.css';

const Feed = () => {
 
    return (
            <div id="feed">

                <div id="page-wrap">

                    <div id="header">
                        <a href='/'><img src={Logo} className="logo" />  </a>
                        <h2 className="home-text">Check out your feed!</h2>
                    </div> 

                </div>

            </div>
    );
}

export default Feed;
