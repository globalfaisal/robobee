import React from 'react';

import Hero from './components/hero/hero';
import Demo from './components/demo/demo';
import Header from './components/layout/header/header';
import Footer from './components/layout/footer/footer';

const App = () => (
  <main role="main" className="main-wrapper">
    <Header>
      <Hero />
    </Header>
    <Demo />
    <Footer />
  </main>
);

export default App;
