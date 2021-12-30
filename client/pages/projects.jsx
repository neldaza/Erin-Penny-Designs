import React from 'react';

export default class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [], view: 'projects' };
    this.handleSpecific = this.handleSpecific.bind(this);
    this.handleSpecificView = this.handleSpecificView.bind(this);
  }

  handleSpecific(event) {
    const specificImages = this.state.images.filter(specificImages => specificImages.projectId === event.target.key &&
      specificImages.specific === true);
    this.setState({ images: specificImages, view: 'specific' });

  }

  handleSpecificView() {
    if (this.state.view === 'projects') {
      return 'hidden';
    } else {
      return 'view';
    }
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
          <i className="fas fa-times cancel-x"></i>
        </div>
          <div className={`projects-holder row text-align-center width-100p ${this.handleSpecific}`}>
          <ul className="first-project-list column-half">
                {
                  this.state.images.filter(images => images.homepage === false && images.photoId % 2 === 0 &&
                    images.specific === false)
                    .map(evenPhotos => {
                      return (
                        <li key={evenPhotos.name}>
                          <img key={evenPhotos.projectId} src={evenPhotos.url} className='project-pictures' />
                          <a className="project-names-text">{evenPhotos.name}</a>
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
                          <img onClick ={this.handleSpecific} key={oddPhotos.projectId} src={oddPhotos.url} className='project-pictures' />
                          <a href={`#specific${oddPhotos.name}`}onClick={this.handleSpecific} key ={oddPhotos.projectId}
                          className="project-names-text">{oddPhotos.name}</a>
                        </li>
                        );
                      })
                  }
                  <li className="row arrow-list">
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
