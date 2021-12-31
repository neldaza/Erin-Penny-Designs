import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.handleDrawer = this.handleDrawer.bind(this);
  }

  componentDidMount() {
    fetch('/api/images')
      .then(res => res.json())
      .then(images => {
        this.setState({ images });
      });
  }

  handleDrawer(event) {
    this.props.onDrawerClick();
  }

  render() {

    return (
    <div className="container position-relative">
        <div className="header row position-fixed width-100p">
          <div className="column-full flex align-items-center space-between">
            <p className="home-logo">ERIN PENNY <a className="home-logo-designs">DESIGNS</a></p>
            <i className="fas fa-align-justify home-tab" onClick={this.handleDrawer}></i>
          </div>
        </div>
      {
      this.state.images.filter(images => images.homepage === true
      ).map(homepageImage => {
        return (
            <img key={homepageImage.photoId} src={homepageImage.url} className='background' />
        );
      })
     }
    </div>
    );
  }
}
