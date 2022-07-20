import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

//styles
import { Image } from './Thumb.styles';

const Thumb = ({ image, movieId, clikable }) => (
  <div>
    {clikable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

Thumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clikable: PropTypes.bool,
};

export default Thumb;
