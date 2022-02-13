import React from 'react';


const Footer = () => (
  <footer role="contentinfo" data-testid="footer">
    <p className="text-center text-black">
      <small>Copyleft  |  Memory Game  | {(new Date()).getFullYear()}</small>
    </p>
  </footer>
);


export default Footer;
