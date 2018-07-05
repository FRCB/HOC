import React, { Component } from 'react';
import './App.css';

import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import SuperPrivate from './components/SuperPrivate'
import OnOffButton from './components/OnOffButton'
import LoginFormRP from './components/LoginFormRP'

class App extends Component {
  render() {
    return (
      <div className="App">
        <LoginForm title='Login' />
        <RegistrationForm title='Registration' />
        <SuperPrivate loggedIn={true} data='my favorite place is Hawaii' />
        <OnOffButton />
        <LoginFormRP title='Other Login Form' />
      </div>
    );
  }
}

export default App;