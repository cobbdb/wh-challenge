import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './store';
import Footer from './components/nav/Footer';
import Landing from './views/landing';

class App extends React.PureComponent {
  componentDidMount() {
    this.updateFavicon();
  }

  componentDidUpdate() {
    this.updateFavicon();
  }

  updateFavicon = () => {
    // Update favicon from Redux cache.
    const { favicon } = this.props;
    document.getElementById('favicon').href = favicon;
  };

  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" component={Landing} />
          <Route path="*" component={Landing} />
        </Switch>
        <Footer />
      </Router>
    );
  }
}

const mapStateToProps = (state) => ({
  favicon: state.team?.favicon,
});

export default connect(mapStateToProps)(App);
