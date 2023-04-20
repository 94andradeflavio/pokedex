import { useState, useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'

import * as S from './styles'

const SearchBar = () => {
  const { loadSome } = useContext(PokemonContext)
  const [search, setSearch] = useState('')

  const handleSearch = () => {
    search !== '' && loadSome(search)
    setSearch('')
  }

  return (
    <S.SearchBarArea>
      <S.SearchBar value={ search } onChange={e => setSearch(e.target.value)} />
      <S.SearchButton type='submit' placeholder='Ex: Pikachu' onClick={ handleSearch }>Buscar</S.SearchButton>
    </S.SearchBarArea>
  )
}

export default SearchBar