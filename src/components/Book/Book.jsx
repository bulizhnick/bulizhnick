import React from 'react';
import PropTypes from 'prop-types';

export const Book = ({ id }) => (
  <section>
    Страница книги
    {id}
  </section>
);

Book.propTypes = {
  id: PropTypes.string,
};

Book.defaultProps = {
  id: '',
};
