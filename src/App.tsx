import React, { Children, Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import Routers from './routes';
import { AuthProvider } from './contexts/AuthContext';

type AuthProps = {
  children: React.ReactNode; // 👈️ type children
};

const App: React.FunctionComponent = () => {
  return (
    <Fragment>
      <Routers></Routers>
    </Fragment>
  );
};

export default App;
