import React from 'react';

export default class EmailModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'pending'
    };
  }

  render() {
    return (
      <div className='my-container whole-register whole-login
       flex align-items-center justify-content-center'>
        <div className='login-holder registration-form-holder position-absolute top-20 my-row align-items-center'>
          <form className='registration-form width-100p'>
            <div className="cancel-x-holder my-row">
              <a className="clean-links" href="#"><i className="fas fa-times registration-x"></i></a>
            </div>
            <div className='login-border'>
              <div className='text-align-center'>
                <h3 className='email-header'>EMAIL PENNY DESIGNS</h3>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
