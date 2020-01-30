/* --- libs ---*/
import React, { Component } from 'react';

/* --- components ---*/
import { Header } from './components/header/header.component';

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
