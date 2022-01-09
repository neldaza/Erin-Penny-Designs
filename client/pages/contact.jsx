import React from 'react';

export default class Contact extends React.Component {
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
    <div className='projects-opacity position-fixed justify-content-center flex-wrap-wrapped'>
      <div className="cancel-x-holder column-full">
        <a className="clean-links" href="#"><i className="fas fa-times cancel-x"></i></a>
      </div>
    </div>
    );
  }
}
