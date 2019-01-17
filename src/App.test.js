import React from 'react'
import { mount } from 'enzyme'
import App from './App'
import { Provider } from 'react-redux'
import store from './store.js'


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

})