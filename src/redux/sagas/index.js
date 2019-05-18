import { takeLatest, all, put } from 'redux-saga/effects'
import { Types } from '../actionCreators'
import ActionCreators from '../actionCreators'

import { getCharacters, getNewsCharacters } from './characters'

export default function* rootSaga() {
    console.log('root Saga')
    yield all([
        takeLatest(Types.GET_CHARACTERS_REQUEST, getCharacters),
        takeLatest(Types.GET_NEWS_CHARACTERS_REQUEST, getNewsCharacters),
    ])
}
