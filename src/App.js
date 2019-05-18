import React from 'react';
import './App.css';
import './styles.scss';

import store from './redux'
import { Provider } from 'react-redux'

import { Route, BrowserRouter as Router } from 'react-router-dom'

import Home from './screems/home'

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route exact path='/' component={Home} />
      </Router>
    </Provider>
  )
}

export default App;
