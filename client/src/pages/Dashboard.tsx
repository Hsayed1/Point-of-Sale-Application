import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { getData } from "../utils/data-utils";
import FormInput from '../components/form-input/form-input';
import { Button } from '@blueprintjs/core';
import SquareOAuth from '../components/square/oauth-button';
import { User } from '../models';

import '../App.css';



const Dashboard = () => {

    return (
        <div className='App-header'>
            <div className="card">
                <text>P.O.S</text>
                <SquareOAuth />
            </div>
        </div>
    );
}

export default Dashboard;
