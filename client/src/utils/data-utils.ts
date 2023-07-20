import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
import { Menu } from './store';

var base_url = "";

if (process.env.NODE_ENV === 'production') {
  base_url = '/v1';
} else {
  base_url = process.env.REACT_APP_API_URL + '/v1'
}

const instance = axios.create({
  baseURL: base_url,
  timeout: 1000,
  headers: {'Authorization': `Bearer ` }
});


export const getMenu = async (token: string) => {
  console.log('Getting Menu');
  const res = await instance.get(`/menu?access_token=${token}`);
  console.log(res.data);
  return res.data;  
};

export const getData = async <T>(
    url: string,
    email: string,
    password: string
  )
  : Promise<T> => {
    const res = await fetch(url, {
      method: 'Post',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({ email, password })
    });

    console.log(res.json());

    return await res.json();
  }
  