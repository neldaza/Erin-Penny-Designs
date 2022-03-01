import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.homepageDrawerClose = this.homepageDrawerClose.bind(this);
  }

  homepageDrawerClose(event) {
    if (this.props.isOpen === 'yes') {
      this.props.onDrawerClick();
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { action } = this.props;
    const req = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(this.state)
    };
    fetch(`/api/auth/${action}`, req)
      .then(res => res.json())
      .then(result => {
        if (action === 'login') {
          window.location.hash = '#';
        }
        if (result.user && result.token) {
          this.props.onSignIn(result);
        }
      });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    return (
      <div className="my-container whole-register position-fixed top-20 whole-login width-80p
       flex align-items-center justify-content-center" onClick={this.homepageDrawerClose}>
        <div className="registration-form-holder my-row align-items-center">
          <form className="registration-form width-100p" onSubmit={handleSubmit}>
            <div className="cancel-x-holder my-row">
              <a className="clean-links" href="#"><i className="fas fa-times registration-x"></i></a>
            </div>
            <div className="login-border">
              <div className="column-half">
                <h3 className="login-main-text register-main-text">LOGIN</h3>
                <p className="register-p">Username</p>
                <input className="register-input" type="text"
                onChange={handleChange} name="username"required />
                <p className="register-p">Password</p>
                <input className="register-input" type="password" name="password"
                onChange={handleChange} required />
              </div>
              <div className="column-half">
                <div className="submit-button-holder width-100p text-align-right">
                  <button className="registration-submit-button" type="submit">LOG IN</button>
                </div>
                <div className="forgot-password-register-holder flex space-between">
                  <p className="forgot-p-register">Forgot your Password?</p>
                  <a href="#register" className="clean-links">
                    <p className="forgot-p-register">Register</p>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
