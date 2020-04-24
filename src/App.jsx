import React from 'react';
import './css/styles.css';
import Header from './components/Header';
import Cards from './components/Cards';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
