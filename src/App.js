import React, { Component } from 'react';
import './App.css';
import InputGroup from './components/InputGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      addressOne: '',
      addressTwo: '',
      phone: '',
      email: '',
      recipientName: '',
      jobName: '',
      companyOfficialName: '',
      companyShortName: '',
      companyAddressOne: '',
      companyAddressTwo: '',
      valueAddSentence: '',
      valueAddTag: '',
      grafIntro: '',
      grafIntroTag: '',
      grafMid: '',
      grafMidTag: '',
      grafEnd: '',
      grafEndTag: ''
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    console.log([e.target.name]);
    console.log(e.target.value);

    this.setState({ [e.target.value]: e.target.value });
  }

  render() {
    return (
      <div className="container text-center bg-light">
        <div>
          <h1 className="display-4">Cover Letter Generator</h1>
          <p className="lead">
            Create a tailored cover letter for any company in any industry in
            seconds.
          </p>
        </div>
        <div>
          <InputGroup
            name="name"
            value={this.state.name}
            onChange={this.onChange}
            placeholder="Enter your name"
          />
          <InputGroup
            name="addressOne"
            value={this.state.addressOne}
            onChange={this.onChange}
            placeholder="Enter your address"
          />
        </div>
      </div>
    );
  }
}

export default App;
