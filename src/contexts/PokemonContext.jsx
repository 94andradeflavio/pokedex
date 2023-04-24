import { createContext, useState } from "react";
import { getAllPokemons, getPokemonByName, getPokemonSpecie } from '../api'
import { colourNameToHex, hexToRgb } from '../helpers/colourNameToHex'

export const PokemonContext = createContext()


const PokemonProvider = ({ children }) => {
    const itemsPerPage = 12;
    const [pokemons, setPokemons] = useState([])
    const [load, setLoad] = useState(false)

    const [page, setPage] = useState(0)
    const [totalPages, setTotalPages] = useState(0)

    const loadAll = async () => {
        setLoad(true)
        const loadList = await getAllPokemons(itemsPerPage, itemsPerPage * page)

        await Promise.resolve(loadList).then(res => {
            setTotalPages(() => Math.ceil(res.count / itemsPerPage))
        })
        
        
        const newlist = await Promise.all(loadList.results.map(async item => {
          const data = await getPokemonByName(item.name)
          
          const specieInfo = await getPokemonSpecie(item.name).then(res => {
            // console.log(res)
            const product = {
                color: res.color.name !== 'white' ? hexToRgb(colourNameToHex(res.color.name)) : hexToRgb(colourNameToHex('silver'))
            }
            return product
          })
          
          const { name, url } = item
          const img = data.sprites.front_default
          const id = data.id


          return {
            name,
            url,
            img,
            id,
            specieInfo
          }
        }))
    
        setPokemons(newlist)
        setLoad(false)
    }

    const loadSome = async name => {
        setLoad(true)
        const response = await getPokemonByName(name).then(async res => {
            console.log(res)
            const specieInfo = await getPokemonSpecie(name).then(res => {
                const product = {
                    color: hexToRgb(colourNameToHex(res.color.name))
                }
                return product
            })
            const product = {
                name: res.name,
                img: res.sprites.front_default,
                id: res.id,
                specieInfo
            }
            return product
        })
        setPokemons([response])
        setLoad(false)
    }

    const onLeftClick = async () => {
        if(page > 0) {
            setPage(prev => prev - 1)
        }
    }
    
    const onRightClick = () => {
        if(page + 1 !== totalPages) {
            setPage(prev => prev + 1)
        }
    }

    return (
        <PokemonContext.Provider value={ { 
            pokemons, 
            setPokemons, 
            loadAll,
            loadSome,
            onLeftClick,
            onRightClick,
            totalPages,
            itemsPerPage,
            page,
            load
         } }>
            { children }
        </PokemonContext.Provider>
    )
}

// export const usePokemon = useContext(PokemonContext)

export default PokemonProvider