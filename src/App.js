import React, { Component } from 'react';
import { connect } from 'react-redux';

import logo from './logo.svg';
import './App.css';
import { postUsers, selectUser } from './Users';

class App extends Component {
  componentDidMount() {
    this.props.selectUser(1);
    this.props.postUsers();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  selectUser: id => dispatch(selectUser(id)),
  postUsers: () => dispatch(postUsers()),
});

export default connect(null, mapDispatchToProps)(App);
