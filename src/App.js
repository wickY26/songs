import React, { Component } from 'react';
import Songs from './Songs/Songs';
import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <div className={classes.wrapper}>
        <Songs />
      </div>
    );
  }
}

export default App;
