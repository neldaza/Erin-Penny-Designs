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
      <div className="projects-opacity position-fixed justify-content-center flex-wrap-wrapped">
        <div className="cancel-x-holder column-full">
          <a className="clean-links" href='#'><i className="fas fa-times cancel-x"></i></a>
        </div>
        <div className="projects-holder my-row text-align-center width-100p">
          <ul className="first-project-list column-half">
                {
                  this.state.images.filter(images => images.homepage === false && images.photoId % 2 === 0 &&
                    images.specific === false)
                    .map(evenPhotos => {
                      return (
                        <li key={evenPhotos.name}>
                          <a className="clean-links" href={`#project-details?projectId=${evenPhotos.projectId}`}>
                            <img key={evenPhotos.photoId} src={evenPhotos.url} className='project-pictures' />
                          </a>
                          <p>
                            <a href={`#project-details?projectId=${evenPhotos.projectId}`} className="clean-links project-names-text">
                              {evenPhotos.name}
                            </a>
                          </p>
                        </li>
                      );
                    })
                }
          </ul>
          <ul className="second-project-list column-half">
                  {
                    this.state.images.filter(images => images.homepage === false && images.photoId % 2 !== 0 && images.specific === false)
                      .map(oddPhotos => {
                        return (
                        <li key={oddPhotos.name}>
                          <a className="clean-links" href={`#project-details?projectId=${oddPhotos.projectId}`}>
                            <img key={oddPhotos.photoId} src={oddPhotos.url} className='project-pictures' />
                          </a>
                            <p>
                              <a href={`#project-details?projectId=${oddPhotos.projectId}`} className="clean-links project-names-text">
                                {oddPhotos.name}
                              </a>
                            </p>
                        </li>
                        );
                      })
                  }
                  <li className="my-row arrow-list">
                <div className="column-half arrow-holder-left">
                      <i className="fas fa-chevron-left"></i>
                    </div>
                    <div className="column-half arrow-holder-right">
                      <i className="fas fa-chevron-right"></i>
                    </div>
                  </li>
          </ul>
        </div>
      </div>
    </>
    );
  }

}
