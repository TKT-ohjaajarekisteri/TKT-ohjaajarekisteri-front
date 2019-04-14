// defines the state of course list filter

const initialState = {
  studyProgramme: '',
  period: '',
  courseName: ''
}

const filterReducer = (state = initialState, action) => {
  switch (action.type) {
  case 'SET_COURSE_NAME': {
    return { ...state, courseName: action.data }
  }
  case 'SET_PROGRAMME': {
    if (state.studyProgramme === action.data) {
      return { ...state, studyProgramme: '' }
    }
    return { ...state, studyProgramme: action.data }
  }
  case 'SET_PERIOD': {
    if (state.period === action.data) {
      return { ...state, period: '' }
    }
    return { ...state, period: action.data }
  }
  case 'INIT_FILTER': {
    return initialState
  }
  default: {
    return state
  }
  }
}


export default filterReducer