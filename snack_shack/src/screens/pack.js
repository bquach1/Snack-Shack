import React, { useState, useEffect } from 'react';
import Logo from '../images/logo.png';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import '../css/pack.css';

const Pack = () => {

    var restaurantArray = [];

    const [input, setInput] = useState('');

    function handleSubmit() {
        if (input != '') {
            restaurantArray.push(input);
        }
        console.log(restaurantArray);
    }
 
    return (
            <div id="pack">

                <div id="page-wrap">
                    <div id="header">
                        <a href='/'><img src={Logo} className="logo" />  </a>
                        <h2 className="home-text">Snack pack with friends!</h2>
                    </div> 
                    <div style={{position: 'absolute', top: '60px'}}>
                        <TextField className="text-field" variant="outlined" helperText="Enter a restaurant idea" onInput = { e => setInput(e.target.value) } />
                        <Button
                            type="submit"
                            variant="contained"
                            color="inherit"
                            className="button-field"
                            onClick = {() => {handleSubmit()}}
                        >
                            Submit Idea
                        </Button>

                        <h1 style={{fontSize: '50px'}}>{restaurantArray[0]}</h1>
                        
                    </div>
                </div>

            </div>
    );
}

export default Pack;
