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
              <p className="index-p"><a>LOGIN</a></p>
              <p className="index-p"><a>ABOUT</a></p>
              <p className="index-p"><a>CONTACT</a></p>
              <p className="index-p"><a>PROJECTS</a></p>
              <p className="index-p"><a>REVIEWS</a></p>
              <p className="index-p"><a>REGISTER</a></p>
            </div>
          </div>
    );
  }
}
