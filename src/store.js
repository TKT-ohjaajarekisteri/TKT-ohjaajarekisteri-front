import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import studentReducer from './reducers/studentReducer'
import courseReducer from './reducers/courseReducer'


const reducer = combineReducers({
  students: studentReducer,
  courses: courseReducer,
  applicants: studentReducer
  // single: courseReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store