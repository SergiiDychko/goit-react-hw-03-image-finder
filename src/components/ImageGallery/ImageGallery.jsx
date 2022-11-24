import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import { StyledImageGallery } from './ImageGalleryStyles';


const ImageGallery = ({galleryArr, toggleModal}) => {
    return (
      <StyledImageGallery class="gallery">
        {galleryArr.map(el => (
          <ImageGalleryItem
            key={el.id}
            item={el}
            toggleModal={toggleModal}
          />
        ))}
      </StyledImageGallery>
    );
  };

ImageGallery.propTypes = {
  galleryArr: PropTypes.arrayOf().isRequired,
  toggleModal: PropTypes.func.isRequired,
};

export default ImageGallery;
