import React from 'react';

import Hero from './components/hero/hero';
import Demo from './components/demo/demo';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';

const App = () => (
  <div className="app-wrapper">
    <Header>
      <Hero />
    </Header>
    <main role="main" className="main-wrapper">
      <Demo />
      <Footer />
    </main>
  </div>
);

export default App;
