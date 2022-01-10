import React from 'react';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    fetch('/api/images/specific/52')
      .then(res => res.json())
      .then(images => {
        this.setState({ images });
      });
  }

  render() {

    return (
    <div className='my-container projects-opacity position-fixed contact-opacity'>
      <div className="cancel-x-holder column-full">
        <a className="clean-links" href="#"><i className="fas fa-times cancel-x"></i></a>
      </div>
      <div className="media-align-center">
        <div className="my-row flex-wrap-wrapped text-align-center">
        <div className="column-half flex align-items-center justify-content-center">
            {
              this.state.images.map(logo => {
                return (
                  <img key={logo.photoId} src={logo.url} className="contact-logo-image"/>
                );
              })
            }

        </div>
        <div className="contact-text-holder column-half width-80p">
          <div className="my-row">
            <div className="column-full">
              <p className="contact-p contact-main-p">CONTACT</p>
            </div>
          </div>
          <div className="my-row">
            <div className="column-full">
              <p className="contact-p bold-p">Telephone</p>
              <p className="contact-p">555-555-5555</p>
            </div>
          </div>
          <div className="my-row">
            <div className="column-full">
              <p className="contact-p bold-p">Email</p>
              <p className="contact-p">penny@penny.com</p>
            </div>
          </div>
          <div className="my-row">
            <div className="column-full">
              <p className="contact-p">OR</p>
            </div>
          </div>
          <div className="my-row">
            <div className="column-full">
              <p className="contact-p bold-p"><a href="#email"
              className="clean-links underline">CONTACT HERE</a></p>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
    );
  }
}
