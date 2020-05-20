import React from 'react';
import PropTypes from 'prop-types';
import ImgBackFace from '../img/assets/logoghibli.png';


const ItemCard = ({ img, flipCard }) => (
  <article data-testid={img.id} role="presentation" className={img.id} data-card={img.alt} onClick={() => flipCard(img.id)}>
    <div role="img" className="front-face">
      <img src={img.url} alt={img.alt} />
    </div>
    <div role="img" className="back-face">
      <img src={ImgBackFace} alt="Img back face" />
    </div>
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
