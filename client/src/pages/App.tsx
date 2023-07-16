import React, { useEffect } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import { useState, ChangeEvent, FormEvent } from "react";
import Icon from "../logo";
import { getData } from "../utils/data-utils";
import FormInput from '../components/form-input/form-input';
import { useSelector, useDispatch } from 'react-redux';
import { setToken } from '../utils/store';

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


const App = ({ token }: AppProps) => {
  
  // react hooks
  const [user, setUser] = useState<User | null>();
  const [accessToken, setAccessToken] = useState<string>(token);

  
  const dispatch = useDispatch()
  // const access_token = useSelector((state) => state.access_token.value);
  
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    if (!token || token.length == 0) {
      navigate('/');
    }
  }, []);

  useEffect(() => {
    if (searchParams.has("access_token")) {
      const temp = searchParams.get("access_token");
      if (temp && temp.length > 0) {
        setToken(temp);
      }
      searchParams.delete("access_token");
      setSearchParams(searchParams);
    }
  }, []);

  const navigateToPOS = () => {
    navigate('/orders');
  };

  const navigateToOrders = () => {
    navigate('/orders');
  };
  console.log(token);

  



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
