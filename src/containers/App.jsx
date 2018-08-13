import React, { Component } from 'react';
import Main from '../components/Main';
import Header from '../components/Header/Header';
import { connect } from 'react-redux';

import { initialState } from '../actions';
import './App.scss';


class App extends Component {
  render() {
    return (<div className="App">
      <Header />
      <Main />
    </div>
    )
  }
}


export default (App);
