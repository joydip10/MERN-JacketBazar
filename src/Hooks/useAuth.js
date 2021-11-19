import React, { useContext } from 'react';
import { context } from './../Components/AuthProvider/AuthProvider';

const useAuth = () => {
    return useContext(context);
};

export default useAuth;