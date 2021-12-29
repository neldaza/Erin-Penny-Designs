import React from 'react';

export default class Projects extends React.Component {
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
      <>
      <div className="projects-opacity position-absolute justify-content-center flex-wrap-wrapped">
        <div className="cancel-x-holder column-full">
          <i className="fas fa-times cancel-x"></i>
        </div>
        <div className="projects-holder row text-align-center width-100p">
          <ul className="column-half">
                  {
                    // eslint-disable-next-line array-callback-return
                    this.state.images.map(image => {
                      if (image.homepage === false && image.photoId % 2 === 0) {
                        return (
                          <li key={image.name}>
                            <img key={image.projectId} src={image.url} className='project-pictures' />
                            <p className="project-names-text">{image.name}</p>
                          </li>
                        );
                      }
                    })
                  }
          </ul>
          <ul className="column-half">
                  {
                    // eslint-disable-next-line array-callback-return
                    this.state.images.map(image => {
                      if (image.homepage === false && image.photoId % 2 !== 0) {
                        return (
                          <li key={image.name}>
                            <img key={image.projectId} src={image.url} className='project-pictures' />
                            <p className="project-names-text">{image.name}</p>
                          </li>
                        );
                      }
                    })
                  }
          </ul>
        </div>
      </div>
      </>
    );
  }

}
