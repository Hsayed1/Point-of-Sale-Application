import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { getData } from "../utils/data-utils";
import FormInput from '../components/form-input/form-input';
import { Button } from '@blueprintjs/core';

import '../App.css';
import OrderScreenApp from './OrderScreenApp';

type AppProps = {
  token: string;
}

// TypeScript declarations
type User = {
  id: number,
  name: string,
  email: string,
  password: string
};

const defaultFormFields = {
  email: '',
  password: '',
};



const App = ({ token }: AppProps) => {
  
  const navigate = useNavigate();
  useEffect(() => {
    if (!token || token.length == 0) {
      navigate('/');
    }
  }, []);

  const navigateToPOS = () => {
    navigate('/orders');
  };

  const navigateToOrders = () => {
    navigate('/orders');
  };

  // react hooks
  const [user, setUser] = useState<User | null>();
  const [accessToken, setAccessToken] = useState<string>(token);
  const [formFields, setFormFields] = useState(defaultFormFields);



  return (
    <div className='App-header'>
      { user ?
      <OrderScreenApp
        token={"user"}
      />
      :
      <div>
      <Icon />
      <div className="card">
        <Button
                text={"POS"}
                fill={true}
                large={true}
                minimal={true}
                outlined={true}
                onClick={navigateToPOS}
        />
        <Button
                text={"Order Screen"}
                fill={true}
                large={true}
                minimal={true}
                outlined={true}
                onClick={navigateToOrders}
        />
      </div>
      </div>
      }
    </div>
  );
}

export default App;
