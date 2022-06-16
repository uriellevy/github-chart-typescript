import React, {Component} from 'react';
import './App.scss';
import HomeView from './components/HomeView';


export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <div className="app">
       <HomeView/>
      </div>
    );
  }
}

