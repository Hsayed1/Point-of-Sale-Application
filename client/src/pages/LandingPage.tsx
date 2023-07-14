import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { getData } from "../utils/data-utils";
import FormInput from '../components/form-input/form-input';
import { Button, Text, TextArea } from '@blueprintjs/core';
import SquareOAuth from '../components/square/oauth-button';
import { User } from '../models';

import '../App.css';



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
