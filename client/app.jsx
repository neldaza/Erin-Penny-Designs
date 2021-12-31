import React from 'react';
import Home from './pages/home';
import Projects from './pages/projects';
import parseRoute from './lib/parse-route';
import SpecificProject from './pages/specific-project';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash)
    };
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === '') {
      return <Projects />;
    } else {
      return <SpecificProject />;
    }
  }

  render() {
    return (
    <div className="container position-relative">
    <>
    <Home />
    {this.renderPage()}
    </>
    </div>
    );
  }
}
