import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "./logo";
import { getData } from "./utils/data-utils";
import FormInput from './components/form-input/form-input';
import { Button } from '@blueprintjs/core';
import SquareOAuth from './components/square/oauth-button';

import './App.css';

// TypeScript declarations
type User = {
  id: number,
  name: string,
  email: string,
  password: string
};

type AppProps = {
    user: User;
}

const OrderScreenApp = ({ user }: AppProps) => {
  // react hooks

  return (
    <div className='App-header'>
        <div className="card">
            <text>Hello {user.name}</text>
            <SquareOAuth />
        </div>
    </div>
  );
}

export default OrderScreenApp;
