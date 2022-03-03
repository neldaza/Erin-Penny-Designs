import React from 'react';
import AppContext from '../lib/app-context';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: 'no' };
    this.renderDrawer = this.renderDrawer.bind(this);
    this.handleDrawer = this.handleDrawer.bind(this);
    this.renderPage = this.renderPage.bind(this);
    this.signOut = this.signOut.bind(this);

  }

  handleDrawer(event) {
    this.props.onDrawerClick();
  }

  renderDrawer() {
    if (this.props.isOpen === 'no') { return ''; }
    if (this.props.isOpen === 'yes') { return 'tab-out'; }
  }

  signOut() {
    const { handleSignOut } = this.context;
    handleSignOut();
    this.handleDrawer();
  }

  renderPage() {
    const { user } = this.context;
    if (user) {
      return (
        <React.Fragment>
          <p className="index-p"><a href="#projects"
            onClick={this.handleDrawer}>PROJECTS</a></p>
          <p className="index-p"><a href="#"
            onClick={this.signOut}>LOG OUT</a></p>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <p className="index-p"><a href="#login"
          onClick={this.handleDrawer}>LOGIN</a></p>
        <p className="index-p"><a href="#projects"
          onClick={this.handleDrawer}>PROJECTS</a></p>
        <p className="index-p"><a href="#register"
          onClick={this.handleDrawer}>REGISTER</a></p>
      </React.Fragment>
    );
  }

  render() {
    const open = this.renderDrawer();

    return (
        <div className="my-container">
          <div className={`my-row tab ${open}`}>
            <div className="column-full drawer-text-top">
              {this.renderPage()}
            </div>
          </div>
        </div>
    );
  }
}

AppDrawer.contextType = AppContext;
