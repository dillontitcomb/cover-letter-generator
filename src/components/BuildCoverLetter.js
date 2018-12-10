import React from 'react';

class BuildCoverLetter extends React.Component {
  render() {
    return (
      <div className="container text-center">
        <h1 className="cover-letter-header">Your new lovely cover letter:</h1>
        <div className="text-center personal-info-block">
          <p>{this.props.name}</p>
          <p>{this.props.addressOne}</p>
          <p>{this.props.addressTwo}</p>
          <p>{this.props.phone}</p>
          <p>{this.props.email}</p>
        </div>
        <div className="text-left recipient-info-block">
          <p>{this.props.recipientName}</p>
          <p>{this.props.jobName}</p>
          <p>{this.props.companyOfficialName}</p>
          <p>{this.props.companyAddressOne}</p>
          <p>{this.props.companyAddressTwo}</p>
        </div>
        <div className="text-left paragraphs-block">
          <p>Dear {this.props.recipientName},</p>
          <p>
            I'm reaching out to apply for the {this.props.jobName} position at{' '}
            {this.props.companyShortName}.
          </p>
          <p>{this.props.valueAddSentence}</p>
          <p>{this.props.grafIntro}</p>
          <p> {this.props.grafMid}</p>
          <p> {this.props.grafEnd}</p>
          <p>Thank you for your consideration,</p>
          <p>{this.props.name}</p>
        </div>
      </div>
    );
  }
}

export default BuildCoverLetter;
