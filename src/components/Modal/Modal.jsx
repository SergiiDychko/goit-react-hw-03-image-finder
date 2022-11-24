import PropTypes from 'prop-types';
import { StyledModal } from './ModalStyles';

const Modal = ({src, alt}) => {
  return (
    <StyledModal>
      <div class="modal">
        <img src={src} alt={alt} />
      </div>
    </StyledModal>
  );

}

Modal.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default Modal;
