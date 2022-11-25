import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { StyledImageGallery } from './ImageGalleryStyles';
import Modal from '../Modal';

class ImageGallery extends Component {
  state = {
    onModal: false,
    modalImageIndex: 0,
  };

  toggleModal = ({ imageId }) => {
    const { galleryArr } = this.props;
    this.setState({
      onModal: !this.onModal,
      modalImageIndex: this.modalImgIndex
        ? ''
        : galleryArr.indexOf(image => image.id === imageId),
    });
  };

  nextPage = () => {
    const { modalImageIndex } = this.state;
    const { galleryArr } = this.props;
    this.setState({
      modalImgIndex:
        modalImageIndex === galleryArr.length - 1 ? 0 : modalImageIndex + 1,
    });
  };

  prevPage = () => {
    const { modalImageIndex } = this.state;
    const { galleryArr } = this.props;
    this.setState({
      modalImgIndex:
        modalImageIndex === 0 ? galleryArr.length - 1 : modalImageIndex - 1,
    });
  };

  render() {
    const { onModal, modalImageIndex } = this.state;
    const { galleryArr } = this.props;
    return (
      <>
        <StyledImageGallery class="gallery">
          {galleryArr.map(el => (
            <ImageGalleryItem
              key={el.id}
              item={el}
              toggleModal={this.toggleModal}
            />
          ))}
        </StyledImageGallery>
        {onModal && (
          <Modal
            image={galleryArr[modalImageIndex]}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
          />
        )}
      </>
    );
  }
}

ImageGallery.propTypes = {
  galleryArr: PropTypes.arrayOf().isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
