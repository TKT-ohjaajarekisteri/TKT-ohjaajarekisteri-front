import React from 'react'
import { shallow } from 'enzyme'
import { LoginForm } from '../components/LoginForm'


describe.only('<LoginForm />', () => {
  let loginComponent


  loginComponent = shallow(<LoginForm />)
  //console.log(loginComponent.debug())


  it('renders loginForm', () => {
    expect(loginComponent.find('.logHeader').length).toBe(1)

    let nameDiv = loginComponent.find('.loginForm')
    expect(nameDiv.text()).toContain('username')
    expect(nameDiv.text()).toContain('password')
  })
})
