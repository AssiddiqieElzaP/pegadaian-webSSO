import React from 'react'
import { Container, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'

import Logo from '../../asset/images/logoNav.png'
import {FaBell} from 'react-icons/fa'

function NavbarComp() {
  return (
   <Container fluid className=''>
     <Navbar>
             <Navbar.Brand href="/dashboard">
        <img
              src={Logo}
              width="230px"
              height="40px"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />

        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end mx-5">
            <NavbarBrand>
                <i><FaBell/></i>
            </NavbarBrand>
            <NavDropdown title="USER ID" id="basic-nav-dropdown" className='' align={{ lg: 'start'}} >
              <NavDropdown.Item href="#action/3.1" >Logout</NavDropdown.Item>
            </NavDropdown>

        </Navbar.Collapse>
      
    </Navbar>
   </Container>
  )
}

export default NavbarComp