import PropTypes from 'prop-types';
import { StyledModal } from './ModalStyles';

const Modal = ({ image, nextPage, prevPage }) => {
  const { tags, largeImageURL } = image;
  return (
    <StyledModal>
      <div class="modal">
        <button type="button" onClick={prevPage}>
          Prev
        </button>
        <img src={largeImageURL} alt={tags} />
        <button type="button" onClick={nextPage}>
          Next
        </button>
      </div>
    </StyledModal>
  );

}

Modal.propTypes = {
  image: PropTypes.object.isRequired,
  nextPage: PropTypes.func.isRequired,
  prevPage: PropTypes.func.isRequired,
};

export default Modal;
