// import PropTypes from 'prop-types';
import { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { StyledImageGallery } from './ImageGalleryStyles';
import Modal from '../Modal';
import { Notify } from 'notiflix';

class ImageGallery extends Component {
  state = {
    showModal: false,
    modalImageIndex: 0,
  };
  
  toggleModal = () => {
    this.setState(({showModal}) => ({
      showModal: !showModal,
    }));
  }

  openModal = (imageId) => {
    const { galleryArr } = this.props;
    this.toggleModal()
    this.setState({
        modalImageIndex: galleryArr.findIndex(image => image.id === imageId),
    });
  };


  nextPage = () => {
    const { modalImageIndex } = this.state;
    const { galleryArr } = this.props;
        this.setState({modalImageIndex:
            modalImageIndex === galleryArr.length - 1
              ? 0
              : modalImageIndex + 1,
        });
  };

    prevPage = () => {
    const { modalImageIndex } = this.state;
    const { galleryArr } = this.props;
    this.setState({
      modalImageIndex:
        modalImageIndex === 0 ? galleryArr.length - 1 : modalImageIndex - 1,
    });
  };

  render() {
    const { showModal, modalImageIndex } = this.state;
    const { galleryArr } = this.props;

    return (
      <>
        <StyledImageGallery className="gallery">
          {galleryArr.map(el => (
            <ImageGalleryItem
              key={el.id}
              item={el}
              openModal={this.openModal}
            />
          ))}
        </StyledImageGallery>
        {showModal && (
          <Modal
            item={galleryArr[modalImageIndex]}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            onClose={this.toggleModal}
          />
        )}
      </>
    );
  }
}

// ImageGallery.propTypes = {
//   galleryArr: PropTypes.arrayOf().isRequired,
//   toggleModal: PropTypes.func.isRequired,
// };

export default ImageGallery;
