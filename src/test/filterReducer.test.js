import filterReducer from '../reducers/filterReducer'
import deepFreeze from 'deep-freeze'

describe('filterReducer', () => {
  test('returns new state with action SET_PROGRAMME', () => {
    const state = {
      studyProgramme: ''
    }
    const action = {
      type: 'SET_PROGRAMME',
      data: 'TKT'
    }

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState.studyProgramme).toBe(action.data)
  })

  test('initializes state with action SET_PROGRAMME if already selected', () => {
    const state = {
      studyProgramme: 'TKT'
    }
    const action = {
      type: 'SET_PROGRAMME',
      data: 'TKT'
    }

    deepFreeze(state)
    const newState = filterReducer(state, action)
    expect(newState.studyProgramme).toBe('')
  })
})