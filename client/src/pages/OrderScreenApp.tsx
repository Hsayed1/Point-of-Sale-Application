import React from 'react';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { getData } from "../utils/data-utils";
import FormInput from '../components/form-input/form-input';
import { Button } from '@blueprintjs/core';

import '../App.css';


type AppProps = {
    token: string;
}

const OrderScreenApp = ({ token }: AppProps) => {
  // react hooks
  console.log(token);

  return (
    <div className='App-header'>
        <div className="card">
            <text>Hello there</text>
        </div>
    </div>
  );
}

export default OrderScreenApp;
