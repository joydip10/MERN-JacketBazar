import React, { useState } from 'react';
import { Box } from '@mui/material';
import Login from './Login';
import Registration from './Registration';
import Header from './../Shared/Header/Header';
import Footer from './../Shared/Footer/Footer';

const Log_Reg = () => {
    const [reg,setReg]=useState(false);
    return (
       <div>
           <Header/>
            <Box>
                    {
                        (reg === false) &&
                        <div className="text-center">
                            <Login />
                            <br/>
                            <h6>Not registered?<span className="text-success" style={{cursor:'pointer'}} onClick={() => setReg(true)}>Create Account</span></h6>
                        </div>
                    }
                    {
                        (reg === true) &&
                        <div className="text-center">
                            <Registration />
                            <br/>
                            <h6>Registered?<span className="text-danger" style={{cursor:'pointer' }} onClick={() => setReg(false)}>Log in</span></h6>
                        </div>
                    }
                </Box>
                <Footer/>
        </div>
    );
};

export default Log_Reg;