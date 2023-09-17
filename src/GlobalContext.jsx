import React from 'react';
import { GET_TOKEN, GET_USER } from './api';

export const UserContext = React.createContext();

export const GlobalContext = ({ children }) => {
  const [data, setData] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  async function getUser() {}

  async function userLogin(body) {
    const { url, options } = GET_TOKEN(body);
    const data = await fetch(url, options);
    console.log(data);
  }

  return (
    <UserContext.Provider value={{ data, loading, userLogin }}>
      {children}
    </UserContext.Provider>
  );
};
