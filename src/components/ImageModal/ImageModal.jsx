import Modal from 'react-modal';
import css from './ImageModal.module.css';


export default function ImageModal({
  currentImage,
  isOpen,
  onRequestClose,
  preventScroll,
}) {
  console.log(currentImage);
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      preventScroll={preventScroll}
      className={css.content}
      overlayClassName={css.overlay}
    >
      <img src={currentImage.urls.regular} alt="" />
      <p>{currentImage.description}</p>
      <p>Author: {currentImage.user.name}</p>
      <p>Likes: {currentImage.likes}</p>
    </Modal>
  );
}