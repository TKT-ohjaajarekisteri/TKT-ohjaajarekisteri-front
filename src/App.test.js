import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import { Provider } from 'react-redux'
import store from './store.js'
//import Course from './components/course/Course'
//jest.mock('./services/courses')
//import courseService from './services/courses'

describe('<App />', () => {
  let app
  beforeAll(() => {
    app = mount(<Provider store={store}><App /></Provider>)
  })

  afterAll(() => {
    app.unMount()
  })

  it('renders self', () => {
    expect(app.find('App').length).toBe(1)
  })

  // it('renders all courses it gets from backend', () => {
  //   app.update()
  //   const courseComponents = app.find(Course)
  //   expect(courseComponents.length).toEqual(courseService.courses.length)
  // })

})