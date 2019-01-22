import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import studentReducer from './reducers/studentReducer'
import courseReducer from './reducers/courseReducer'
import course_studentsReducer from './reducers/course_studentsReducer'



const reducer = combineReducers({
  applicants: course_studentsReducer,
  students: studentReducer,
  courses: courseReducer
})

const store = createStore(
  reducer,
  applyMiddleware(thunk)
)

export default store