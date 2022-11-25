import { Component } from 'react';
import './App.css';
import FetchUtils from '../utils/fetchApi';
import ImageGallery from './ImageGallery/';
import Searchbar from './Searchbar/';
import Button from './Button';


class App extends Component {
  state = {
    imgStorage: [],
    totalHits: 0,
  };

  onSubmit = () => {
    this.setState({ imgStorage: [] });
    try {
      FetchUtils.fetchImages()
        .then(responce => responce.json())
        .then(images => this.setState({ imgStorage: images.hits, totalHits: images.totalHits }));
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  loadMore = () => {
    try {
      FetchUtils.fetchMoreImages()
        .then(responce => responce.json())
        .then(images =>
          this.setState({ imgStorage: [...this.state.imgStorage, ...images.hits] })
        );
    } catch (error) {
      console.log('Something went wrong');
    }
  };

  render() {
    const { onSubmit, loadMore } = this;
    const { imgStorage, totalHits} = this.state;
    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery galleryArr={imgStorage} />
        {imgStorage.length < totalHits && (
          <Button onClick={loadMore}>Load More</Button>
        )}
      </>
    );
  }
}

export default App;
