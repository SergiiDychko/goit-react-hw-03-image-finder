import PropTypes from 'prop-types';
import { StyledImageGalleryItem } from './ImageGalleryItemStyles';

const ImageGalleryItem = ({alt, src}) => {
    return (
      <StyledImageGalleryItem>
        <img className="imageGalleryItem-image" src={src} alt={alt} />
      </StyledImageGalleryItem>
    );

}

ImageGalleryItem.propTypes = {
src: PropTypes.string.isRequired,
alt: PropTypes.string.isRequired,
};

export default ImageGalleryItem;