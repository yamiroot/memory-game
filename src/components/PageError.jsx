import React from 'react';
import Header from './Header';
import Footer from './Footer';
import ImgError from '../img/error.png';


const PageError = () => (
  <div>
    <Header hide />
    <main className="PageError">
      <h1>404</h1>
      <section>
        <img src={ImgError} alt="Error 404" />
        <p className="text-center">El servidor no pudo encontrar el contenido solicitado.</p>
      </section>
    </main>
    <Footer />
  </div>
);


export default PageError;
