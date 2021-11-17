import React from 'react';
import PropTypes from 'prop-types';
import { Arrow, CurrentPage, Pages, StyledPagination } from './styles';

const Pagination = function ({
  currentPage = 1,
  nextPage = false,
  prevPage = false,
  pages = 1,
  onNextPage,
  onPrevPage
}) {
  return (
    <StyledPagination>
      <Arrow onClick={onPrevPage} disabled={!prevPage}>
        <i className="fas fa-chevron-left" /> Previous
      </Arrow>

      <CurrentPage>{currentPage} </CurrentPage>
      <Pages>of {pages}</Pages>

      <Arrow onClick={onNextPage} disabled={!nextPage}>
        Next <i className="fas fa-chevron-right" />
      </Arrow>
    </StyledPagination>
  );
};

Pagination.defaultProps = {
  currentPage: 1,
  nextPage: false,
  prevPage: false,
  pages: 1
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  nextPage: PropTypes.bool,
  prevPage: PropTypes.bool,
  pages: PropTypes.number,
  onNextPage: PropTypes.func.isRequired,
  onPrevPage: PropTypes.func.isRequired
};

export default Pagination;
