import { useContext } from 'react'
import { PokemonContext } from '../../contexts/PokemonContext'

import * as S from './styles'



const Pagination = () => {
    const { onLeftClick, onRightClick, totalPages, page } = useContext(PokemonContext)

    return (
        <S.Pagination>
            <button onClick={onLeftClick}>➜</button>
            <h4>Página { page + 1 } de { totalPages }</h4>
            <button onClick={onRightClick}>➜</button>
        </S.Pagination>
    )
}

export default Pagination