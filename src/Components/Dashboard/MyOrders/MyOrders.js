import React, { useEffect, useState } from 'react';
import useAuth from '../../../Hooks/useAuth';
import Products from './Products';

const MyOrders = () => {

    return (
        <div>
            <Products></Products>
        </div>
    );
};

export default MyOrders;