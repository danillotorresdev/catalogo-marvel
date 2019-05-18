import { createStore, applyMiddleware} from 'redux'

import createSagaMiddleware from 'redux-saga'
import sagas from './sagas'
import reducers from './reducers'
import 'bootstrap/dist/css/bootstrap.min.css'

const sagaMiddleware = createSagaMiddleware()
export default createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(sagas)