import React from 'react';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleDarkTab = this.handleDarkTab.bind(this);

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

  handleDarkTab() {
    if (this.props.isOpen === 'yes') { return 'open-tab'; }
    if (this.props.isOpen === 'no') { return ''; }
  }

  render() {
    const darkTab = this.handleDarkTab();
    const backgroundPic = this.state.images.filter(images => images.homepage === true
    ).map(homepageImage => {
      return {
        backgroundImage: 'url(' + homepageImage.url + ')'
      };
    });
    return (
    <div className="container position-relative background" style={backgroundPic[0]}>
        <div className={`header row position-fixed width-100p ${darkTab}`}>
          <div className="column-full flex align-items-center space-between">
            <p className="home-logo">ERIN PENNY <a className="home-logo-designs">DESIGNS</a></p>
            <i className="fas fa-align-justify home-tab" onClick={this.handleDrawer}></i>
          </div>
        </div>
    </div>
    );
  }
}
