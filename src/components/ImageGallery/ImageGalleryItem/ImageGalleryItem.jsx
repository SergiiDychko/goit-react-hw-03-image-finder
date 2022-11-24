import PropTypes from 'prop-types';
import { StyledImageGalleryItem } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({ item, toggleModal }) => {
  const { webformatURL, largeImageURL, tags } = item;
  return (
    <StyledImageGalleryItem>
      <img
        className="imageGalleryItem-image"
        src={webformatURL}
        alt={tags}
        onClick={() => toggleModal(largeImageURL, tags)}
      />
    </StyledImageGalleryItem>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
    tags: PropTypes.string.isRequired,
  }).isRequired,
  alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;