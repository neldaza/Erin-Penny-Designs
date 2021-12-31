import React from 'react';
import Home from './pages/home';
import Projects from './pages/projects';
import parseRoute from './lib/parse-route';
import SpecificProject from './pages/specific-project';
import AppDrawer from './pages/drawer';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      route: parseRoute(window.location.hash),
      isDrawerOpen: 'no'
    };
    this.openDrawer = this.openDrawer.bind(this);

  }

  openDrawer() {
    if (this.state.isDrawerOpen === 'no') {
      this.setState({ isDrawerOpen: 'yes' });
    } else {
      this.setState({ isDrawerOpen: 'no' });
    }
  }

  componentDidMount() {
    window.addEventListener('hashchange', event => {
      this.setState({ route: parseRoute(window.location.hash) });
    });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'projects') {
      return <Projects />;
    }
    if (route.path === 'project-details') {
      const projectId = route.params.get('projectId');
      return <SpecificProject projectId={projectId}/>;
    }
  }

  render() {
    return (
    <div className="container position-relative">
    <>
    <Home onDrawerClick={this.openDrawer} />
    <AppDrawer isOpen={this.state.isDrawerOpen} />
    {this.renderPage()}
    </>
    </div>
    );
  }
}
