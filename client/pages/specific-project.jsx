import React from 'react';

export default class SpecificProject extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: [] };
  }

  componentDidMount() {
    fetch(`api/images/${this.props.projectId}`)
      .then(res => res.json())
      .then(pictures => this.setState({ images: pictures }));
  }

  render() {
    return (
      <>
      <div className="projects-opacity position-fixed justify-content-center flex-wrap-wrapped">
        <div className="cancel-x-holder column-full">
          <i className="fas fa-times cancel-x"></i>
        </div>
        <div className="specific-project">
          <div className='specific-project-header'>
          {
            this.state.images.filter(images => images.homepage === false && images.specific === false)
              .map(mainImage => {
                return (
                  <React.Fragment key={mainImage.photoId}>
                  <div className='specific-main-image-holder column-half'>
                    <img src={mainImage.url} className="specific-main-image" />
                  </div>
                  <div className="specific-main-text-holder column-half">
                    <h2 className="specific-main-text">{mainImage.name}</h2>
                  </div>
                  </React.Fragment>
                );
              })
          }
          </div>
          <div className="specific-project-gallery transparent-borders">
              {
                this.state.images.filter(images => images.specific === true)
                  .map(galleryImages => {
                    return (
                      <React.Fragment key={galleryImages.photoId}>
                        <img src={galleryImages.url} className='specific-gallery-image' />
                      </React.Fragment>
                    );
                  })
              }
              <div className="gallery-footer text-align-right transparent-borders">
                <h2><a href="#projects" className="gallery-footer-text">Back To Projects</a></h2>
              </div>
          </div>
        </div>
      </div>
      </>
    );
  }
}
