import {createStore,applyMiddleware,combineReducers} from 'redux'
import thunk from 'redux-thunk'
import bookReducers from './book/book.reducers'

const reducers = combineReducers({
    books: bookReducers,
  })
  
  const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
  )
  
  export default store