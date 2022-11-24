import { Component } from 'react';
import './App.css';
import FetchUtils from '../utils/fetchApi';
import Modal from './Modal/';
import ImageGallery from './ImageGallery/';
import Searchbar from './Searchbar/';
import Button from './Button';


class App extends Component {
  state = {
    imgStorage: [],
    totalHits: 0,
    onModal: false,
    modalImage: '',
    modalTags: ''
  };

  toggleModal = ({largeImageURL, tags}) => {
    this.setState({
      onModal: !this.onModal,
      modalImage: this.modalImage ? '' : largeImageURL,
      modalTags: this.modalTags ? '' : tags,
    });
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

  getMoreImages = () => {
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
    const { onSubmit, getMoreImages, toggleModal, onModal } = this;
    const { imgStorage, totalHits, modalImage, modalTags} = this.state;
    return (
      <>
        <Searchbar onSubmit={onSubmit} />
        <ImageGallery galleryArr={imgStorage} toggleModal={toggleModal} />
        {imgStorage.length < totalHits && (
          <Button onClick={getMoreImages}>Load More</Button>
        )}
        {onModal && <Modal src={modalImage} alt={modalTags} />}
      </>
    );
  }
}

export default App;
