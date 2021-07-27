import React from 'react';
import logo from './logo.svg';
import './App.css';

import Amplify, { Auth } from 'aws-amplify';
import { AmplifyAuthenticator } from '@aws-amplify/ui-react';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function App() {
  return (
    <AmplifyAuthenticator>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </AmplifyAuthenticator>
  );
}

export default App;
