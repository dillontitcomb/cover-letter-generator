import React, { Component } from 'react';
import './App.css';
import BuildCoverLetter from './components/BuildCoverLetter';
import InputGroup from './components/InputGroup';
import TextAreaFieldGroup from './components/TextAreaFieldGroup';

const hiddenFormStyle = {
  display: 'none'
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibility: '',
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
      grafEndTag: '',
      coverLetterResult: ''
    };
    this.onChange = this.onChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({ formVisibility: 'hidden', coverLetterResult: true });
  }

  render() {
    return (
      <div className="bg-light">
        <div className="container text-center bg-light">
          <div>
            <h1 className="display-4">Cover Letter Generator</h1>
            <p className="lead">
              Create a tailored cover letter for any company in any industry in
              seconds.
            </p>
          </div>
          <div
            style={
              this.state.formVisibility === 'hidden' ? hiddenFormStyle : {}
            }
          >
            <h4>Personal Contact Information:</h4>
            <form onSubmit={this.handleSubmit}>
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
              <InputGroup
                name="addressTwo"
                value={this.state.addressTwo}
                onChange={this.onChange}
                placeholder="Enter your address"
              />
              <InputGroup
                name="phone"
                value={this.state.phone}
                onChange={this.onChange}
                placeholder="Enter your phone number"
              />
              <InputGroup
                name="email"
                value={this.state.email}
                onChange={this.onChange}
                placeholder="Enter your email"
              />
              <h4>Recipient Information:</h4>
              <InputGroup
                name="recipientName"
                value={this.state.recipientName}
                onChange={this.onChange}
                placeholder="Enter the recipient of your cover letter"
              />
              <InputGroup
                name="jobName"
                value={this.state.jobName}
                onChange={this.onChange}
                placeholder="Enter the position you're applying for"
              />
              <InputGroup
                name="companyOfficialName"
                value={this.state.companyOfficialName}
                onChange={this.onChange}
                placeholder="Enter the company's official name"
              />
              <InputGroup
                name="companyShortName"
                value={this.state.companyShortName}
                onChange={this.onChange}
                placeholder="Enter the company's shorter name or abbreviation"
              />
              <InputGroup
                name="companyAddressOne"
                value={this.state.companyAddressOne}
                onChange={this.onChange}
                placeholder="Enter the company's address"
              />
              <InputGroup
                name="companyAddressTwo"
                value={this.state.companyAddressTwo}
                onChange={this.onChange}
                placeholder="Enter the company's address"
              />
              <h4>Cover Letter Content:</h4>
              <TextAreaFieldGroup
                name="valueAddSentence"
                value={this.state.valueAddSentence}
                onChange={this.onChange}
                placeholder="In one sentence, what is your value-add to the company?"
              />
              <InputGroup
                name="valueAddTag"
                value={this.state.valueAddTag}
                onChange={this.onChange}
                placeholder="What industry or job title does this sentence pertain to? You can save multiple for different scenarios"
              />
              <TextAreaFieldGroup
                name="grafIntro"
                value={this.state.grafIntro}
                onChange={this.onChange}
                placeholder="Provide one short paragraph introducing yourself and your relevant skills"
              />
              <InputGroup
                name="grafIntroTag"
                value={this.state.grafIntroTag}
                onChange={this.onChange}
                placeholder="What industry or job title does this paragraph pertain to? You can save multiple for different scenarios"
              />
              <TextAreaFieldGroup
                name="grafMid"
                value={this.state.grafMid}
                onChange={this.onChange}
                placeholder="Provide your second paragraph concluding your history"
              />
              <InputGroup
                name="grafMidTag"
                value={this.state.grafMidTag}
                onChange={this.onChange}
                placeholder="What industry or job title does this paragraph pertain to? You can save multiple for different scenarios"
              />
              <TextAreaFieldGroup
                name="grafEnd"
                value={this.state.grafEnd}
                onChange={this.onChange}
                placeholder="Provide a final paragraph tying together past and present"
              />
              <InputGroup
                name="grafEndTag"
                value={this.state.grafEndTag}
                onChange={this.onChange}
                placeholder="What industry or job title does this paragraph pertain to? You can save multiple for different scenarios"
              />
              <button className="btn btn-primary" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
        {this.state.coverLetterResult ? (
          <BuildCoverLetter {...this.state} />
        ) : (
          ''
        )}
      </div>
    );
  }
}

export default App;
