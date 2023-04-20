import { useState } from 'react';
import Modal from 'react-modal';

import * as S from './styles'

Modal.setAppElement('#root');

const Card = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const imgPath = `${ item.id }.gif`

  const relativePath = item.id <= 500 ? `src/assets/img/pokemonGif/${imgPath}` : item.img

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log('abriu')
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <S.CardContainer>
      <S.Card id={ item.id } color={ item.specieInfo.color } onClick={openModal}>
          <img src={ relativePath } />
          <h3>{ item.name }</h3>
      </S.Card>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        contentLabel="Example Modal"
        overlayClassName="modal-overlay"
        className="main-modal-content"
      >
        <img src={ relativePath } />
        <h2>{ item.name }</h2>
      </Modal>
    </S.CardContainer>
  )
}

export default Card