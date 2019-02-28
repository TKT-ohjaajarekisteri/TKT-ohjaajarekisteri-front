import React from 'react'
import { shallow } from 'enzyme'
import { ContactDetailsForm } from '../components/student/ContactDetailsForm'

describe('<ContactDetailsForm />', () => {
  let detailsComponent

  detailsComponent = shallow(<ContactDetailsForm />)
  // console.log(detailsComponent.debug())

  it('renders ContactDetailsForm', () => {
    let detailsDiv = detailsComponent.find('.studentForm')
    expect(detailsDiv.text()).toContain('firstname')
    expect(detailsDiv.text()).toContain('Phone')
    expect(detailsDiv.text()).toContain('Email')
  })

})
