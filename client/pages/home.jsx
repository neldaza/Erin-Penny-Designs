import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import AppContext from '../lib/app-context';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: []
    };
    this.handleDrawer = this.handleDrawer.bind(this);
    this.handleDarkTab = this.handleDarkTab.bind(this);
    this.handleDarkTabColumn = this.handleDarkTabColumn.bind(this);
    this.homepageDrawerClose = this.homepageDrawerClose.bind(this);
    this.handleLoggedInHeaderView = this.handleLoggedInHeaderView.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.renderAdmin = this.renderAdmin.bind(this);

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

  homepageDrawerClose(event) {
    if (this.props.isOpen === 'yes') {
      this.props.onDrawerClick();
    }
  }

  handleDarkTab() {
    if (this.props.isOpen === 'yes') { return 'open-tab'; }
    if (this.props.isOpen === 'no') { return ''; }
  }

  handleDarkTabColumn() {
    if (this.props.isOpen === 'yes') { return 'open-tab-column'; }
    if (this.props.isOpen === 'no') { return ''; }
  }

  renderPage() {
    const { user } = this.context;
    if (user) {
      return (
       <React.Fragment>
          <i className={`fas fa-user home-tab ${this.renderAdmin()}`}></i>
          <i className="fab fa-facebook-messenger home-tab"></i>
        </React.Fragment>
      );
    }
  }

  renderAdmin() {
    const { user } = this.context;
    if (user.isAdmin === true) { return 'admin-icon'; }
  }

  handleLoggedInHeaderView() {
    const { user } = this.context;
    if (user) {
      return 'space-between';
    } else {
      return 'text-align-right';
    }
  }

  render() {
    const darkTab = this.handleDarkTab();
    const darkTabColumn = this.handleDarkTabColumn();

    return (
      <>
      <div className='my-container'>
        <header className="header my-row width-100p position-fixed">
          <div className="column-full flex align-items-center space-between">
            <a href='#' onClick={this.homepageDrawerClose}>
              <p className="home-logo">PENNY <span className="home-logo-designs">DESIGNS</span></p>
            </a>
            <div className={`${this.handleLoggedInHeaderView()} ${darkTabColumn} icons-holder`}>
            {this.renderPage()}
              <i className={`fas fa-align-justify home-index-icon ${darkTab}`} onClick={this.handleDrawer}></i>
            </div>
          </div>
        </header>
        <div className='bootstrap-carousel width-100p position-fixed' onClick={this.homepageDrawerClose}>
          {
            <Carousel controls={true} indicators={false} fade={true} interval={5000}>
            {
              this.state.images.filter(images => images.homepage === true)
                .map(background => {
                  return (
                     <Carousel.Item key={background.photoId}>
                       <img src={background.url} className="background" />
                     </Carousel.Item>
                  );
                })
            }
            </Carousel>
          }
        </div>
      </div>
      </>
    );
  }
}

Home.contextType = AppContext;
