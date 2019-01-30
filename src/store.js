import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import studentReducer from './reducers/studentReducer'
import courseReducer from './reducers/courseReducer'
import singleCourseReducer from './reducers/singleCourseReducer'
import notificationReducer from './reducers/notificationReducer'


const reducer = combineReducers({
  notification: notificationReducer,
  students: studentReducer,
  courses: courseReducer,
  applicants: singleCourseReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store