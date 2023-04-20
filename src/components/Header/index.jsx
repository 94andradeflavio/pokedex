import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'


import * as S from './styles'

import logo from '../../assets/img/logo.png'
import SearchBar from '../SearchBar'

const Header = () => {
  const { loadAll } = useContext(PokemonContext)

  return (
    <S.HeaderContent>
        <Link to='/' onClick={loadAll}><img src={ logo } alt="Logo" /></Link>
        <S.RightSide>
          {/* <Link to='/favourites'>Favoritos</Link> */}
          <SearchBar />
        </S.RightSide>
    </S.HeaderContent>
  )
}

export default Header