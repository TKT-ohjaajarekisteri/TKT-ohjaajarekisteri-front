import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import studentReducer from './reducers/studentReducer'
import courseReducer from './reducers/courseReducer'
import infoReducer from './reducers/infoReducer'



const reducer = combineReducers({
  students: studentReducer,
  courses: courseReducer,
  applicants: studentReducer,
  content: infoReducer
  // single: courseReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store