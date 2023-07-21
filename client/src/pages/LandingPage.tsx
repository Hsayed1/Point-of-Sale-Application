import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { Button, Text, TextArea } from '@blueprintjs/core';
import SquareOAuth from '../components/square/oauth-button';

import '../App.css';
import ItemLabel from '../components/menu/ItemLabel';
import ProductButton from '../components/menu/ProductButton';
import QuantityButton from '../components/menu/QuantityButton';
import CheckoutButton from '../components/menu/CheckoutButton';



const LandingPage = () => {

    return (
        <div className='App-header'>
            <div className="card">
                <Text>P.O.S</Text>
                <SquareOAuth />

                {/* Example ItemLabel */}
                <ItemLabel
                    name="Example Item"
                    price="$9.99"
                    onSelect={(item) => {
                        console.log(`Item "${item}" selected!`);
                        // You can handle the item selection logic here or pass it down to other components.
                    }}
                />

                 {/* Example ProductButton */}
                <ProductButton
                    productName="Example Product"
                    productPhotoUrl="example URL" // Replace with the actual product photo URL
                    
                />

                
                    <QuantityButton />

                    <CheckoutButton/>

            </div>
        </div>
    );
}

export default LandingPage;
