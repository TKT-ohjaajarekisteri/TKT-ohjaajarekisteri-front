import React from 'react'
import { mount } from 'enzyme'
import { LoginForm } from '../components/LoginForm'


describe('<LoginForm />', () => {
  let loginComponent


  loginComponent = mount(<LoginForm />)
  console.log(loginComponent.debug())


  it('renders loginForm', () => {
    expect(loginComponent.find('.logHeader').length).toBe(1)

    let nameDiv = loginComponent.find('.loginForm')
    expect(nameDiv.text()).toContain('username')
    expect(nameDiv.text()).toContain('password')
  })
})
