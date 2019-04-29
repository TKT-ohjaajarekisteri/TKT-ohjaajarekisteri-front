import React from 'react'

const GDPRInfo = () => {
  // the course version is chosen accordingly to if loggedUser has applied to the course

  return (
    <div className='GDPRInfo'>

      <h2>Privacy Policy Statement</h2>

      <h4>What information do we collect?</h4>
      <p>In Short: We collect personal information that you provide to us such as name, student-number and contact information.</p>

      <p>Name and Contact Data. We collect your first and last name(s), email address, student-number and phone number.</p>

      <p>Experience. We collect your teaching experience and history: the courses you have applied to have been accepted as a teaching assistant.</p>

      <h4>How do I remove my data from the register?</h4>
      <p>Inform the register administrator Reijo Siven (<a href='mailto:reijo.siven@helsinki.fi'>reijo.siven@helsinki.fi</a>) that you want your information removed from the register.</p>

    </div>
  )
}


export default GDPRInfo