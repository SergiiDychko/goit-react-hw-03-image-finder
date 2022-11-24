import { Component } from 'react';
import { Notify } from 'notiflix';

class FetchUtils extends Component {
  state = {
    page: 1,
    query: '',
    perPage: '12',
  };

  fetchImages = evt => {
    this.setState(prevState => ({
      page: prevState.page + 1,
      query: evt.target.value,
    }));
    if (this.query.trim() === '') {
      return Notify.info('Sorry, Please enter a more specific query');
    }
    return fetch(
      `https://pixabay.com/api/?q=${this.query}&page=${this.page}&key=your_key&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
    );
  };

  fetchMoreImages = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
    return fetch(
      `https://pixabay.com/api/?q=${this.query}&page=${this.page}&key=your_key&image_type=photo&orientation=horizontal&per_page=${this.perPage}`
    );
  };
}

export default FetchUtils;
