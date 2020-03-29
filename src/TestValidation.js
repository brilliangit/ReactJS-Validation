import React, { Component } from 'react';
import TextView from './Util/TextView.js';
import update from 'immutability-helper';
import { run, ruleRunner } from './Validation/ruleRunner.js'
import { required, mustMatch, minLength, maxLength, isEmail, isPhone, isNumber } from './Validation/rules.js';
import { debounce } from 'lodash';

const fieldValidations = [
  ruleRunner("firstName", "Nama", required, maxLength(10)),
  ruleRunner("emailAddress", "Email", required, isEmail),
  ruleRunner("phone", "Phone", required, isPhone),
  ruleRunner("password1", "Password", required, isNumber, minLength(6), maxLength(8)),
  ruleRunner("password2", "Konfirmasi password", mustMatch("password1", "Password"))
];

class TestValidation extends Component {

  constructor(props) {
    super(props);
    this.handleFieldChanged = this.handleFieldChanged.bind(this);
    this.handleSubmitClicked = this.handleSubmitClicked.bind(this);
    this.errorFor = this.errorFor.bind(this);
    this.state = {
      showErrors: false,
      showTypeErrors: {},
      validationErrors: {},
    }
    console.log(this.props)
  }

  componentWillMount() {
    this.setState({ validationErrors: run(this.state, fieldValidations) });
  }

  errorFor(field) {
    return this.state.validationErrors[field] || "";
  }

  handleFieldChanged(field) {
    return (e) => {
      let newState = update(this.state, {
        [field]: { $set: e.target.value }
      })
      newState.validationErrors = run(newState, fieldValidations);
      if (this.state.validationErrors[field] === undefined || this.state.validationErrors[field].length > 0) {
        newState.showTypeErrors[field] = true
      }
      this.setState(newState);
    };
  }

  handleSubmitClicked() {
    this.setState({ showErrors: true });
    let obj = this.state.validationErrors;
    if (Object.keys(obj).length > 0 && typeof obj === 'object') return null
    return this.props.callbackSubmit(this.state);
  }

  render() {
    
    return (
      <div className="wrapper">
        <div>
          <h2>Praktikum Validasi</h2>
          <TextView
            placeholder="Nama"
            showError={this.state.showErrors || this.state.showTypeErrors.firstName}
            text={this.props.firstName}
            onFieldChanged={this.handleFieldChanged("firstName")}
            errorText={this.errorFor("firstName")} />

          <TextView
            placeholder="Email"
            showError={this.state.showErrors || this.state.showTypeErrors.emailAddress}
            text={this.props.emailAddress}
            onFieldChanged={this.handleFieldChanged("emailAddress")}
            errorText={this.errorFor("emailAddress")} />

          <TextView
            placeholder="No HP"
            showError={this.state.showErrors || this.state.showTypeErrors.phone}
            text={this.props.phone}
            onFieldChanged={this.handleFieldChanged("phone")}
            errorText={this.errorFor("phone")} />

          <TextView
            placeholder="Password"
            showError={this.state.showErrors || this.state.showTypeErrors.password1}
            type="password"
            text={this.props.password1}
            onFieldChanged={this.handleFieldChanged("password1")}
            errorText={this.errorFor("password1")} />

          <TextView
            placeholder="Konfirmasi Password"
            showError={this.state.showErrors || this.state.showTypeErrors.password2}
            type="password"
            text={this.props.password2}
            onFieldChanged={this.handleFieldChanged("password2")}
            errorText={this.errorFor("password2")} />

          <input id="CreateAccountButton" type='submit' value="Simpan" onClick={this.handleSubmitClicked} ></input>
        </div>
      </div>
    );
  }
}

export default TestValidation;
