import React from 'react';

export default class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      companyName: ''
    };

  }

  render() {
    return (
      <div className='my-container position-fixed top-0 width-100p height-100vh flex align-items-center justify-content-center'>
        <div className="my-row width-80p align-items-center">
          <form className="registration-form">
            <div className="cancel-x-holder my-row">
              <i className="fas fa-times registration-x"></i>
            </div>
            <div className="registration-border">
              <div className="column-half">
                <h3 className="register-main-text">REGISTER</h3>
                <p className="register-p">Create Username</p>
                <input className="register-input" type="text"></input>
                <p className="register-p">Create Password</p>
                <input className="register-input" type="text"></input>
              </div>
              <div className="column-half">
                <div className="registration-bottom-half flex">
                  <div className="first-name-input-holder column-half">
                    <p className="register-p">First Name</p>
                    <input className="register-input" type="text"></input>
                  </div>
                  <div className="last-name-input-holder column-half">
                    <p className="register-p">Last Name</p>
                    <input className="register-input" type="text"></input>
                  </div>
                </div>
                <p className="register-p">Registered Company Name</p>
                <input className="register-input" type="text"></input>
              </div>
              <div className="submit-button-holder flex justify-content-right">
                <button className="registration-submit-button" type="submit">SUBMIT</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
