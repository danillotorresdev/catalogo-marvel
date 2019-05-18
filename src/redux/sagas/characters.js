
import axios from 'axios'
import ActionCreators from '../actionCreators'
import { put } from 'redux-saga/effects'

import { baseUrl, params, paramsWithOffset } from '../../services/MarvelAPI'


export function* getCharacters(action) {
    const characters = yield axios.get(`${baseUrl}characters?${params}`)
    yield put(ActionCreators.getCharactersSuccess(characters.data.data))

}

export function* getNewsCharacters(action) {
    const newsCharacters = yield axios.get(`${baseUrl}characters?${paramsWithOffset(12)}`)
    yield put(ActionCreators.getNewsCharactersSuccess(newsCharacters.data.data))
    console.log(action)

}
