import React from 'react';
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

const maria: User = {
  id: 1,
  name: 'Maria Doe',
  email: 'maria@example.com',
  password: 'maria123'
};
const App = ({ token }: AppProps) => {
  // react hooks
  const [user, setUser] = useState<User | null>();
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { email, password } = formFields;

  const resetFormFields = () => {
    return (
      setFormFields(defaultFormFields)
    );
  };

  // handle input changes
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormFields({...formFields, [name]: value });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      // make the API call
      const res:User = await getData('/login', email, password);
      setUser(res);
    } catch (error) {
      alert('User Sign In Failed');
    }
  };

  const oauth = () => {

    resetFormFields();

  };

  return (
    <div className='App-header'>
      { user ?
      <OrderScreenApp
        user={user}
      />
      :
      <div>
      <div className="card">
        <Icon />
        <h2>Sign In</h2>
        <form onSubmit={handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            required
            name="email"
            value={email}
            onChange={handleChange}
          />
          <FormInput
            label="Password"
            type='password'
            required
            name='password'
            value={password}
            onChange={handleChange}
          />
          <div className="button-group">
            <Button
                text={"Log In"}
                type={"submit"}
            />
            <span>
              <Button
                  rightIcon="share"
                  text={"Square OAuth "}
                  onClick={() => oauth()}
              />
            </span>
          </div>
        </form>
      </div>
      </div>
      }
    </div>
  );
}

export default App;
