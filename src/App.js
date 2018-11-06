import React, { Component } from 'react';
import { Snackbar } from './snackbar';
import './App.css';

class App extends Component {
  snackbarRef = React.createRef();

  _showSnackbarHandler = (e) => {
    e.preventDefault();
    this.snackbarRef.current.openSnackBar('button click event');
  }

  render() {
    return (
      <div className="App">
        <button onClick = {this._showSnackbarHandler}>Click To Open To Snackbar</button>
        <Snackbar ref = {this.snackbarRef} />
      </div>
    );
  }
}

export default App;
