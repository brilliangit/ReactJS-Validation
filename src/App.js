import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TestValidation from './TestValidation.js'
// import { ruleRunner } from './Validation/ruleRunner';
// import { required, mustMatch, minLength, maxLength, isEmail, isPhone } from './Validation/rules.js';
// const createForm = [
//   {
//     fieldName : 'firstname',
//     rule: ruleRunner("firstname", "Nama", required, maxLength(10))
//   },
//   {
//     fieldName : 'email',
//     rule: ruleRunner("emailAddress", "Email", required, isEmail)
//   }
// ]

class App extends Component {

  onSave() {
    alert('Tersimpannnn');
  }

  render() {
    return (
      <div className="App">
        <TestValidation callbackSubmit={this.onSave} />
      </div>
    );
  }
}

export default App;
