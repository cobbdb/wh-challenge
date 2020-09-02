import React from 'react';
import { connect } from 'react-redux';
import { Router, Switch, Route } from 'react-router-dom';
import { history } from './store';
import Footer from './components/nav/Footer';
import Landing from './views/landing';

class App extends React.PureComponent {
  componentDidMount() {
    this.updateMeta();
  }

  componentDidUpdate() {
    this.updateMeta();
  }

  updateMeta = () => {
    const { favicon, name } = this.props;
    document.getElementById('favicon').href = favicon;
    document.getElementsByTagName('title')[0].innerText = `${name} Superfans`;
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
  favicon: state.team?.strTeamBadge,
  name: state.team?.strTeam,
});

export default connect(mapStateToProps)(App);
