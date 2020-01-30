/* --- libs ---*/
import React, { Component } from 'react';
import { Header } from './components/header/header.component';

/* --- components ---*/

class App extends Component {
  render() {
    return (
      <div className="app-container">
        <Header />
      </div>
    );
  }
}

export default App;
