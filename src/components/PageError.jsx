import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImgError from '../img/assets/dinogif.gif';


const PageError = () => (
  <div data-testid="view-error">
    <Header hide />
    <main role="main" className="PageError">
      <img src={ImgError} alt="Error 404" />
      <section role="document">
        <h1>404</h1>
        <p className="text-center">El servidor no pudo encontrar el contenido solicitado.</p>
      </section>
    </main>
    <Footer />
  </div>
);


export default PageError;
