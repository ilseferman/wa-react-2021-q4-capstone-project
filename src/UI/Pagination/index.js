import React from 'react';
import { Arrow, CurrentPage, Pages, StyledPagination } from './styles';

function Pagination({
  currentPage = 1,
  nextPage = false,
  prevPage = false,
  pages = 1,
}) {
  return (
    <StyledPagination>
      {prevPage && (
        <Arrow>
          <i className="fas fa-chevron-left"></i> Previous
        </Arrow>
      )}
      <CurrentPage>{currentPage} </CurrentPage>
      <Pages> of &nbsp;{pages}</Pages>
      {nextPage && (
        <Arrow>
          Next <i className="fas fa-chevron-right"></i>
        </Arrow>
      )}
    </StyledPagination>
  );
}

export default Pagination;
