import React, { useState } from 'react';
import { Button, TextField, Alert } from '@mui/material';
import useAuth from './../../../Hooks/useAuth';
import { useHistory } from 'react-router';


const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const history=useHistory();
    const handleOnBlur = e => {
        setEmail(e.target.value);
    }
    const {token}=useAuth();
    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://secret-everglades-19035.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => {
                if(res.status===200){
                    return res.json();
                }
                else if(res.status===403){
                    history.push('/login')
                }
            })
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setSuccess(true);
                }
            })

        e.preventDefault()
    }
    return (
        <div>
            <h2>Make an Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    label="Email"
                    type="email"
                    onBlur={handleOnBlur}
                    variant="standard" />
                <Button type="submit" variant="contained">Make Admin</Button>
            </form>
            {success && <Alert severity="success">Made Admin successfully!</Alert>}
        </div>
    );
};

export default MakeAdmin;