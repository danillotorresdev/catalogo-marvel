import { createReducer } from 'reduxsauce'
import { Types } from '../actionCreators'

export const INITIAL_STATE = {
    isLoading: false,
    data: [],
    newsData: []
}

export const getCharactersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getCharactersSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        data: action.characters
    }
}

export const getCharactersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const getNewsCharactersRequest = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: true,
    }
}

export const getNewsCharactersSuccess = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false,
        newsData: action.newsCharacters
    }
}

export const getNewsCharactersFailure = (state = INITIAL_STATE, action) => {
    return {
        ...state,
        isLoading: false
    }
}

export const HANDLERS = {
    [Types.GET_CHARACTERS_REQUEST]: getCharactersRequest,
    [Types.GET_CHARACTERS_SUCCESS]: getCharactersSuccess,
    [Types.GET_CHARACTERS_FAILURE]: getCharactersFailure,

    [Types.GET_NEWS_CHARACTERS_REQUEST]: getNewsCharactersRequest,
    [Types.GET_NEWS_CHARACTERS_SUCCESS]: getNewsCharactersSuccess,
    [Types.GET_NEWS_CHARACTERS_FAILURE]: getNewsCharactersFailure

}

export default createReducer(INITIAL_STATE, HANDLERS)