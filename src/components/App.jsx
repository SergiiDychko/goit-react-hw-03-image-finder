import { Component } from 'react';
import './App.css';
import { fetchImages, fetchMoreImages } from '../utils/fetchApi';
import ImageGallery from './ImageGallery/';
import Searchbar from './Searchbar/';
import Button from './Button';
import Loader from './Loader';

class App extends Component {
  state = {
    loading: false,
    imgStorage: [],
    totalHits: '',
    page: 2,
    query: '',
  };

  onSubmit = evt => {
    evt.preventDefault();
    const query = evt.target.elements.search.value;
    this.setState({
      imgStorage: [],
      loading: true,
    });
    fetchImages(query)
      .then(images =>
        this.setState({
          imgStorage: images.hits,
          totalHits: images.totalHits,
          page: 2,
          query,
        })
      )
      .catch(error => console.log('Something went wrong'))
      .finally(() => this.setState({ loading: false }));
  };

  loadMore = evt => {
    evt.preventDefault();
    const { query, page, loading } = this.state;
    this.setState({ page: page + 1, loading: true });
    fetchMoreImages(query, page)
      .then(images =>
        this.setState({
          imgStorage: [...this.state.imgStorage, ...images.hits],
        })
      )
      .catch(error => {
        console.log('Something went wrong');
      })
      .finally(() => this.setState({ loading: false }));
  };

  render() {
    const { onSubmit, loadMore } = this;
    const { imgStorage, totalHits, loading } = this.state;
    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <div className="container">
          <ImageGallery galleryArr={imgStorage} />
          {loading && <Loader />}
          {imgStorage.length > 0 && imgStorage.length < totalHits && (
            <Button onClick={loadMore}>Load More</Button>
          )}
        </div>
      </>
    );
  }
}

export default App;
