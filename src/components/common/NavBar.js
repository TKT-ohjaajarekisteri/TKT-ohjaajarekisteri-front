import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import logo from '../../Images/hy-logo.png'
import url from '../../services/config'

export const NavBar = ({ loggedUser, logout }) => {

  return (
    <div className='NavBar'>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
        <Navbar.Brand href={url}>
          <img
            src={logo}
            width='60'
            height='60'
            className='d-inline-block align-top'
            alt='Helsingin Yliopisto'
          />
        </Navbar.Brand>
        <Navbar.Brand>
          TKT – Assistant Register
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>

          <Nav className='mr-auto'>
            <Nav.Link href='#' as='span'>
              {loggedUser && loggedUser.user.role === 'admin'
                ? <Link to='/admin/courses'>Courses</Link>
                : <em></em>} &nbsp;
            </Nav.Link>

            <Nav.Link href='#' as='span'>
              {loggedUser && loggedUser.user.role === 'admin'
                ? <Link to='/admin/summary'>Summary</Link>
                : <em></em>} &nbsp;
            </Nav.Link>

            <Nav.Link href='#' as='span'>
              {loggedUser && loggedUser.user.role === 'admin'
                ? <Link to='/admin/studentDelete'>Delete student</Link>
                : <em></em>} &nbsp;
            </Nav.Link>            

            <Nav.Link href='#' as='span'>
              {loggedUser && loggedUser.user.role === 'student'
                ? <Link to='/apply'>Apply</Link>
                : <em></em>} &nbsp;
            </Nav.Link>

            <Nav.Link href='#' as='span'>
              {loggedUser && loggedUser.user.role === 'student'
                ? <Link to='/applications'>Applications</Link>
                : <em></em>} &nbsp;
            </Nav.Link>
          </Nav>

          <Nav.Link href='#' as='span'>
            {loggedUser && loggedUser.user.role === 'admin'
              ? <Link to='/admin'>Change password</Link>
              : <em></em>} &nbsp;
          </Nav.Link>

          <Nav.Link href='#' as='span'>
            {loggedUser && loggedUser.user.role === 'student'
              ? <Link to='/update-info'>Profile</Link>
              : <em></em>} &nbsp;
          </Nav.Link>



          <Nav.Link href='#' as='span'>
            {loggedUser ?
              <Button
                className='loginbutton'
                onClick={logout}
                variant='outline-secondary'
                type='button'
              >
                Logout
              </Button>
              :
              <em></em>} &nbsp;
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

