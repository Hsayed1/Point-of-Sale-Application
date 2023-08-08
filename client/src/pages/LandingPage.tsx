import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { Button, Text, TextArea } from '@blueprintjs/core';
import SquareOAuth from '../components/square/oauth-button';

import '../App.css';
import ItemLabel from '../components/menu/ItemLabel';
import ProductButton from '../components/menu/ProductButton';



const LandingPage = () => {

    return (
        <div className='App-header'>
            <div className="card">
                <Text>P.O.S</Text>
                <SquareOAuth />


            </div>
        </div>
    );
}

export default LandingPage;
