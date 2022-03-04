import React from 'react';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: 'admin',
      password: 'admin',
      logIn: 'pending'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.homepageDrawerClose = this.homepageDrawerClose.bind(this);
    this.handleBadLogin = this.handleBadLogin.bind(this);
    this.handleBadLoginMessage = this.handleBadLoginMessage.bind(this);

  }

  handleBadLogin() {
    if (this.state.logIn === 'failed') {
      return 'view';
    } else if (this.state.logIn === 'connection failed') {
      return 'view';
    } else if (this.state.logIn === 'pending') {
      return 'visibility-hidden';
    } else if (this.state.logIn === 'success') {
      return 'visibility-hidden';
    }
  }

  handleBadLoginMessage() {
    if (this.state.logIn === 'failed') {
      return 'Invalid Login';
    } else if (this.state.logIn === 'connection failed') {
      return 'Bad Request, please check your internet connection';
    }
    return 'Invalid Login';
  }

  homepageDrawerClose(event) {
    if (this.props.isOpen === 'yes') {
      this.props.onDrawerClick();
    }
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
      logIn: 'pending'
    });
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
        if (result.user && result.token) {
          this.props.onSignIn(result);
          this.setState({ logIn: 'success' });
          window.location.hash = '#';
        } else if (result.error === 'an unexpected error occurred') {
          this.setState({ username: this.state.username, password: this.state.password, logIn: 'connection failed' });
        } else {
          this.setState({ username: this.state.username, password: this.state.password, logIn: 'failed' });
        }
      });
  }

  render() {
    const { handleChange, handleSubmit } = this;
    const badLogIn = this.handleBadLogin();
    const badLogInMessage = this.handleBadLoginMessage();

    return (
      <div className="my-container whole-register whole-login
       flex align-items-center justify-content-center" onClick={this.homepageDrawerClose}>
        <div className="login-holder registration-form-holder position-absolute top-20 my-row align-items-center">
          <form className="registration-form width-100p" onSubmit={handleSubmit}>
            <div className="cancel-x-holder my-row">
              <a className="clean-links" href="#"><i className="fas fa-times registration-x"></i></a>
            </div>
            <div className="login-border">
              <div className="column-half">
                <h3 className="login-main-text register-main-text">LOGIN</h3>
                <p className="register-p">Username</p>
                <input className="register-input" type="text"
                onChange={handleChange} name="username" required value="admin"/>
                <p className="register-p">Password</p>
                <input className="register-input" type="password" name="password"
                onChange={handleChange} required value="admin"/>
                <p className={`${badLogIn} bad-login`}>
                  {badLogInMessage}
                </p>
              </div>
              <div className="column-half">
                <div className="submit-button-holder width-100p text-align-right">
                  <button className="registration-submit-button" type="submit">LOG IN</button>
                </div>
                <div className="forgot-password-register-holder text-align-right">
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
