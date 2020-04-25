import React from 'react';
import Header from './Header';
import Footer from './Footer';


const PageError = () => (
  <div>
    <Header hide={false} />
    <main className="PageError">
      <p>Servidor no encontrado.</p>
    </main>
    <Footer />
  </div>
);


export default PageError;
