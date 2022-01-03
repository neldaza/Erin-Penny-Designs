/* eslint-disable no-undef */
const handleCarousel = function carousel() {
  if (this.state.currentHomepageIndex === 0) {
    this.setState({
      currentHomepageImageUrl: 'url(' + homepagePictures[0].url + ')',
      currentHomepageIndex: 1
    });
  } else if (this.state.currentHomepageIndex === 1) {
    this.setState({
      currentHomepageImageUrl: 'url(' + homepagePictures[1].url + ')',
      currentHomepageIndex: 2
    });
  } else if (this.state.currentHomepageIndex === 2) {
    this.setState({
      currentHomepageImageUrl: 'url(' + homepagePictures[2].url + ')',
      currentHomepageIndex: 3
    });
  } else if (this.state.currentHomepageIndex === 3) {
    this.setState({
      currentHomepageImageUrl: 'url(' + homepagePictures[3].url + ')',
      currentHomepageIndex: 4
    });
  } else if (this.state.currentHomepageIndex === 4) {
    this.setState({
      currentHomepageImageUrl: 'url(' + homepagePictures[4].url + ')',
      currentHomepageIndex: 0
    });
  }
};

export default handleCarousel;
