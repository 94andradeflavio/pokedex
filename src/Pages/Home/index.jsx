import { useEffect, useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'

import Card from '../../components/Card'
import Pagination from '../../components/Pagination'

import * as S from './styles'

const Home = () => {
  const { load, loadAll, pokemons, page, itemsPerPage } = useContext(PokemonContext)

  useEffect(() => {
    loadAll()
  }, [page])

  return (
    <S.Home>

      <h2>Pokémons</h2>

      { load && (
        <div className="load"><h2>Carregando...</h2></div>
      ) }

      { !load && (
        <>
          <S.ItensContainer>
            { pokemons.map((item, index) => 
                <Card key={index} item={ item } />
              ) }
          </S.ItensContainer>
    
          { pokemons.length >= itemsPerPage && <Pagination /> }
        </>
      ) }

    </S.Home>
  )
}

export default Home