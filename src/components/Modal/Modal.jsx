// import PropTypes from 'prop-types';
import { StyledModal } from './ModalStyles';
import { ReactComponent as Prev } from '../../icons/chevronleft.svg';
import { ReactComponent as Next } from '../../icons/chevronright.svg';
import { Component } from 'react';
import { createPortal } from 'react-dom';

const modalRoot = document.querySelector('#modal-root')

class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown )
  }

  handleKeyDown = e => {
      if (e.code === 'Escape') {
        this.props.onClose();
      }
      if (e.code === 'ArrowRight') {
        this.props.nextPage();
      }
      if (e.code === 'ArrowLeft') {
        this.props.prevPage();
      }
  };
  
  handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      this.props.onClose();
    }
  }

  render() {
    const { item, nextPage, prevPage } = this.props;
    const { tags, largeImageURL } = item;

    return createPortal(
      <StyledModal onClick={this.handleBackdropClose}>
        <div className="modal">
          <img src={largeImageURL} alt={tags} />
          <div className="modalBtnsWrap">
            <button className="modalBtn" type="button" onClick={prevPage}>
              <Prev className="btnIcon" />
            </button>
            <button className="modalBtn" type="button" onClick={nextPage}>
              <Next className="btnIcon" />
            </button>
          </div>
        </div>
      </StyledModal>,
      modalRoot);
  }
}

// Modal.propTypes = {
//   image: PropTypes.object.isRequired,
//   nextPage: PropTypes.func.isRequired,
//   prevPage: PropTypes.func.isRequired,
// };

export default Modal;
