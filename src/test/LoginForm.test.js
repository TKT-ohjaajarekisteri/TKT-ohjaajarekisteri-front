import React from 'react'
import { mount } from 'enzyme'
import { LoginForm } from '../components/LoginForm'


describe('<LoginForm />', () => {
  let loginComponent

  loginComponent = mount(<LoginForm />)

  it('renders loginForm', () => {
    expect(loginComponent.find('.logHeader').length).toBe(1)

    let nameDiv = loginComponent.find('.studentForm')
    expect(nameDiv.text()).toContain('username')
    expect(nameDiv.text()).toContain('password')
  })
})
