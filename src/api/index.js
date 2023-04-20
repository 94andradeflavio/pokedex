import axios from "axios"

axios.defaults.baseURL = 'https://pokeapi.co/api/v2'

export const getAllPokemons = async (limit = 40, offset = 0) => {
    try {
        const data = await axios
                                .get(`/pokemon?limit=${limit}&offset=${offset}`)
                                .then(res => res.data)
    
        return data
    } catch (error) {
        console.error(error)
    }
}

export const getPokemonByName = async name => {
    try {
        const data = await axios
                        .get(`/pokemon/${name}`)
                        .then(res => res.data)
        return data

    } catch (error) {
        console.error('Pokémon não encontrado', error)
    }
}

export const getPokemonSpecie = async name => {
    try {
        const data = await axios
                        .get(`/pokemon-species/${name}`)
                        .then(res => res.data)
        return data

    } catch (error) {
        console.error(error)
    }
}