import React from 'react';
import Projects from './projects';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    fetch('/api/images')
      .then(res => res.json())
      .then(images => {
        this.setState({ images });
      });
  }

  render() {

    return (
    <div className="container position-relative">
        <div className="header row position-absolute width-100p">
          <div className="column-full flex align-items-center space-between">
            <p className="home-logo">ERIN PENNY <a className="home-logo-designs">DESIGNS</a></p>
            <i className="fas fa-align-justify home-tab"></i>
          </div>
        </div>
        <Projects />
      {
      // eslint-disable-next-line array-callback-return
      this.state.images.map(image => {
        if (image.homepage === true) {
          return (
        <img key={image.photoId} src={image.url} className='background'/>
          );
        }
      })
      }
  </div>
    );
  }
}
