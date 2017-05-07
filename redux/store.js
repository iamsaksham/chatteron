import { applyMiddleware, compose, createStore } from 'redux'
import reducer from './reducer/index'
import logger from 'redux-logger'

// TOOD: add middleware
let finalCreateStore = compose(
  applyMiddleware(logger())
)(createStore)

export default function configureStore (initialState = { todos: [] }) {
  return finalCreateStore(reducer, initialState)
}