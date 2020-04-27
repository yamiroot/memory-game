import React from 'react';
import PropTypes from 'prop-types';


const ItemCard = ({ img }) => (
  <article>
    <img src={img.url} alt={img.alt} />
  </article>
);


ItemCard.propTypes = {
  img: PropTypes.shape({
    url: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
};


export default ItemCard;
