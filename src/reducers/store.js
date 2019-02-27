import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import studentReducer from './studentReducer'
import courseReducer from './courseReducer'
import singleCourseReducer from './singleCourseReducer'
import notificationReducer from './notificationReducer'
import loginReducer from './loginReducer'
import courseApplicationReducer from './courseApplicationReducer'


const reducer = combineReducers({
  notification: notificationReducer,
  students: studentReducer,
  courses: courseReducer,
  singleCourse: singleCourseReducer,
  loggedUser: loginReducer,
  courseApplication: courseApplicationReducer,
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store