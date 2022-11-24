import PropTypes from 'prop-types';
import {StyledSearchbar} from './SearchbarStyles'

const Searchbar = () => {
  return (
    <StyledSearchbar>
      <form className="searchForm">
        <button type="submit" className="searchForm-button">
          <span className="searchForm-button-label">Search</span>
        </button>

        <input
          className="searchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearchbar>
  );
};

Searchbar.propTypes = {

}

export default Searchbar;