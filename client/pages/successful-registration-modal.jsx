import React from 'react';

export default class SuccessfulRegistration extends React.Component {

  render() {
    return (
      <div className='my-container width-80p flex align-items-center justify-content-center'>
        <div className='success-modal success-holder position-absolute top-20 text-align-center'>
          <div className='registration-form flex align-items-center'>
            <div className="success-x-holder my-row">
              <a className="clean-links" href="#"><i className="fas fa-times registration-x"></i></a>
            </div>
            <p>Account Successfully Created!</p>
          </div>
        </div>
      </div>
    );
  }
}
