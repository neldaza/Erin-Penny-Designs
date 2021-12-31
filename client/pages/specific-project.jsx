import React from 'react';

export default class SpecificProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    fetch(`api/images/${this.props.projectId}`)
      .then(res => res.json());
  }

  render() {
    return (
      <div className="projects-opacity position-fixed justify-content-center flex-wrap-wrapped">
        <div className="cancel-x-holder column-full">
          <i className="fas fa-times cancel-x"></i>
        </div>

      </div>
    );
  }
}
