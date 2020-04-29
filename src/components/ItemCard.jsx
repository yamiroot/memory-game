/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import ImgBackFace from '../img/logoghibli.png';


const ItemCard = ({ img, flipCard }) => (
  <article className={img.id} onClick={() => flipCard(img.id)} data-card={img.alt}>
    {/*   <a href="./" onClick={(event) => flipCard(event, img.id)}> */}
    <div className="front-face">
      <img src={img.url} alt={img.alt} />
    </div>
    <div className="back-face">
      <img src={ImgBackFace} alt="Img back face" />
    </div>
    {/*  </a> */}
  </article>
);


ItemCard.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  flipCard: PropTypes.func.isRequired,
};


export default ItemCard;
