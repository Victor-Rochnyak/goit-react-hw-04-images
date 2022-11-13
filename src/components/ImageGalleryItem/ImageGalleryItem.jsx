import Modal from 'components/Modal/Modal';
import { useState } from 'react';

export default function ImageGalleryItem({ smallImage, largeImage, tags }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen((modalIsOpen) => !modalIsOpen);
  };

  return (
    <>
      <li className="ImageGalleryItem" onClick={toggleModal}>
        <img className="ImageGalleryItem-image" src={smallImage} alt={tags} />
      </li>
      {modalIsOpen && (
        <Modal closeModal={toggleModal}>
          <img src={largeImage} alt={tags} />
        </Modal>
      )}
    </>
  );
}
