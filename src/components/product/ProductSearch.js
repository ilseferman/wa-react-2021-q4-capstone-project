import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const ProductSearch = function () {
  const [search, setSearch] = useState('');
  const history = useHistory();

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    history.push(`/search?q=${search}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onChange={handleChange}
      />
      <button type="submit">
        <i className="fa fa-search" />
      </button>
    </form>
  );
};

export default ProductSearch;
