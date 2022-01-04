import React from 'react';
import Home from './pages/home';
import Projects from './pages/projects';
import parseRoute from './lib/parse-route';
import SpecificProject from './pages/specific-project';
import AppDrawer from './pages/drawer';
import RegisterForm from './pages/register';
import Login from './pages/login';
import AppContext from './lib/app-context';
import decodeToken from './lib/decode-token';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      route: parseRoute(window.location.hash),
      isDrawerOpen: 'no',
      isAuthorizing: true
    };
    this.openDrawer = this.openDrawer.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);

  }

  handleSignIn(result) {
    const { user, token } = result;
    window.localStorage.setItem('react-context-jwt', token);
    this.setState({ user });
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

    const token = window.localStorage.getItem('react-context-jwt');
    const user = token ? decodeToken(token) : null;
    this.setState({ user, isAuthorizing: false });
  }

  renderPage() {
    const { route } = this.state;
    if (route.path === 'login') {
      return <Login action={route.path} onSignIn={this.handleSignIn} />;
    }
    if (route.path === 'projects') {
      return <Projects />;
    }
    if (route.path === 'project-details') {
      const projectId = route.params.get('projectId');
      return <SpecificProject projectId={projectId}/>;
    }
    if (route.path === 'register') {
      return <RegisterForm action={route.path} isOpen={this.state.isDrawerOpen} onDrawerClick={this.openDrawer}/>;
    }
  }

  render() {
    const { user, route } = this.state;
    const { handleSignIn } = this;
    const contextValue = { user, route, handleSignIn };

    return (
    <div className="my-container position-relative">
      <AppContext.Provider value ={contextValue}>
        <>
          <Home onDrawerClick={this.openDrawer} isOpen={this.state.isDrawerOpen}/>
          <AppDrawer isOpen={this.state.isDrawerOpen} onDrawerClick={this.openDrawer}/>
          {this.renderPage()}
        </>
      </AppContext.Provider>
    </div>
    );
  }
}
