import { createActions } from 'reduxsauce'

export const {
    Types,
    Creators
} = createActions({
    getCharactersRequest: null,
    getCharactersSuccess: ['characters'],
    getCharactersFailure: null,

    getNewsCharactersRequest: null,
    getNewsCharactersSuccess: ['newsCharacters'],
    getNewsCharactersFailure: null,
})

export default Creators