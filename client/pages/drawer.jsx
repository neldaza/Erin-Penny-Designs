import React from 'react';

export default class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: 'no' };
    this.renderDrawer = this.renderDrawer.bind(this);

  }

  renderDrawer() {

    if (this.props.isOpen === 'no') { return ''; }
    if (this.props.isOpen === 'yes') { return 'tab-out'; }
  }

  render() {
    const open = this.renderDrawer();
    return (
          <div className={`row tab ${open}`}>
            <div className="column-full">
              <h1>Menu</h1>
              <p className="index-p"><a>About</a></p>
              <p className="index-p"><a>Get Started</a></p>
              <p className="index-p"><a>Sign In</a></p>
            </div>
          </div>
    );
  }
}
