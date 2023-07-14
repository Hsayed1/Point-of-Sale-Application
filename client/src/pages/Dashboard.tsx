import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { getData } from "../utils/data-utils";
import FormInput from '../components/form-input/form-input';
import { Button } from '@blueprintjs/core';
import SquareOAuth from '../components/square/oauth-button';
import { User } from '../models';

import '../App.css';


type AppProps = {
    user: User;
}

const Dashboard = ({ user }: AppProps) => {
    // react hooks

    const queryParams = new URLSearchParams(window.location.search);
    console.log(queryParams.get("access_token"))

    return (
        <div className='App-header'>
            <div className="card">
                <text>Mar7aban {user.name}</text>
                <SquareOAuth />
            </div>
        </div>
    );
}

export default Dashboard;
