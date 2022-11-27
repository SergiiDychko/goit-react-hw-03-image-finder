// import PropTypes from 'prop-types';
import { StyledSearchbar } from './SearchbarStyles'
import { ReactComponent as Search } from '../../icons/search.svg';

const Searchbar = ({ onSubmit }) => {
  return (
    <StyledSearchbar>
      <form className="searchForm" onSubmit={onSubmit}>
        <button type="submit" className="searchForm-button">
          <Search className='btnIcon' />
        </button>

        <input
          className="searchForm-input"
          type="text"
          name='search'
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </StyledSearchbar>
  );
};

// Searchbar.propTypes = { }

export default Searchbar;