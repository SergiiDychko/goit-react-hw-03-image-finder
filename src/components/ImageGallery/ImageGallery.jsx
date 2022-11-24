import PropTypes from 'prop-types';
import ImageGalleryItem from './ImageGalleryItem';
import Button from '../Button';
import { StyledImageGallery } from './ImageGalleryStyles';


const ImageGallery = ({ images }) => {
    return (
      <StyledImageGallery class="gallery">
            {images.map(image => <ImageGalleryItem key={image.id} item={image} />)}
      </StyledImageGallery>
    );
};

ImageGallery.propTypes = {
images: PropTypes.arrayOf()
};

export default ImageGallery;
