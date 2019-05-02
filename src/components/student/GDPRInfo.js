import React from 'react'

const GDPRInfo = () => {
  return (
    <div className='GDPRInfo'>
      <h2>Privacy Policy Statement</h2>

      <h4>Name of the Service</h4>
      <p>TKT-ohjaajarekisteri</p>

      <h4>Controller of the data file and contact information</h4>

      <p><b>University of Helsinki</b>
        <br></br>P.O. Box 3 (Fabianinkatu 33)
        <br></br>00014 University of Helsinki
        <br></br>Finland
      </p>
      <p>
        <b>Register administrator</b> Reijo Siven (<a href='mailto:reijo.siven@helsinki.fi'>reijo.siven@helsinki.fi</a>)
      </p>

      <h4>Data to be recorded</h4>
      <p>Following data will be retrieved from your home organization and will be recorded at your consent upon each login:<br></br>
        Name, email address, student number, telephone number. Experience is asked to get more information about applicants.<br></br>
        We collect your teaching experience and history: the courses you have applied to have been accepted as a teaching assistant.</p>

      <h4>The purpose of the processing of data</h4>

      <p>Collected personal data are used to:</p>
      <ul>
        <li>manage access rights</li>
        <li>keep track of course assistant applications</li>
      </ul>

      <p>System log data are used to:</p>
      <ul>
        <li>monitor server and data communications capacity</li>
        <li>solve technical problems and misuse</li>
      </ul>

      <h4>Data storage period</h4>
      <p>Data is stored until removed from the system by a person.</p>

      <h4>Regular transfer of data to third parties</h4>
      <p>Persons with permissions to access the data include</p>
      <ul>
        <li>Reijo Siven</li>
        <li>System administrators</li>
      </ul>
      <p>The data are not transferred to third parties or outside EU.</p>

      <h4>Right of access to personal data</h4>
      <p>If a student wants to access personal data concerning his/her information, he/she can contact Reijo Siven (<a href='mailto:reijo.siven@helsinki.fi'>reijo.siven@helsinki.fi</a>).</p>

      <h4>Principles of protecting data</h4>
      <p>The saved data are stored on a server to which only administrators have access rights. The data can be reached with username and password only. A user (teacher, student) has access only to those parts of the registry that he/she needs. The server and the computers are stored in locked premises.</p>

      <h4>Correction of incorrect information</h4>
      <p>Information collected from you: contact <a href='mailto:reijo.siven@helsinki.fi'>reijo.siven@helsinki.fi</a>.</p>

      <h4>How do I remove my data from the register?</h4>
      <p>Inform the register administrator Reijo Siven (<a href='mailto:reijo.siven@helsinki.fi'>reijo.siven@helsinki.fi</a>) that you want your information removed from the register.</p>
    </div >
  )
}

export default GDPRInfo