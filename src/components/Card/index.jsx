import { useState } from 'react';
import Modal from 'react-modal';

import * as S from './styles'
import { getPokemonByName, getPokemonSpecie } from '../../api';
import { translateText } from '../../helpers/translate';

Modal.setAppElement('#root');

const Card = ({ item }) => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [specs, setSpecs] = useState({})
  const [description, setDescription] = useState()
  const imgPath = `${ item.id }.gif`

  const relativePath = item.id <= 500 ? `src/assets/img/pokemonGif/${imgPath}` : item.img

  const openModal = async () => {
    const data = await getPokemonByName(item.name)
    const dataDescription = await getPokemonSpecie(item.name).then(res => translateText(res.flavor_text_entries[0].flavor_text))
    setSpecs(data)
    setDescription(dataDescription)
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    console.log(specs)
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
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
        { modalIsOpen && (
          <>
            <img src={ relativePath } />
            <div className="text-area">
              <h2>{ item.name }</h2>
              <div className="types">
                <p>{ description }</p>
                <h6>Type:</h6>
                { specs.types.map(type => {
                  return <p key={ type.type.name }>{ type.type.name }</p>
                }) }
              </div>
            </div>
          </>
        ) }
      </Modal>
    </>
  )
}

export default Card