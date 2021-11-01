import React from 'react';
import { Arrow, CurrentPage, Pages, StyledPagination } from './styles';

function Pagination({
  currentPage = 1,
  nextPage = false,
  prevPage = false,
  pages = 1,
  onNextPage,
  onPrevPage,
}) {
  return (
    <StyledPagination>
      {prevPage && (
        <Arrow onClick={onPrevPage}>
          <i className="fas fa-chevron-left"></i> Previous
        </Arrow>
      )}
      <CurrentPage>{currentPage} </CurrentPage>
      <Pages> of &nbsp;{pages}</Pages>
      {nextPage && (
        <Arrow onClick={onNextPage}>
          Next <i className="fas fa-chevron-right"></i>
        </Arrow>
      )}
    </StyledPagination>
  );
}

export default Pagination;
