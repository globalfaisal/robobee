import React from 'react';

import Hero from './components/hero/hero';
import Demo from './components/demo/demo';
import Header from './components/layout/header/header';

const App = () => (
  <main role="main" className="main-wrapper">
    <Header />
    <Hero />
    <Demo />
  </main>
);

export default App;
