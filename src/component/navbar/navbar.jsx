import React from 'react'
import { Container, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap'

import Logo from '../../asset/images/logoNav.png'
import {FaBell} from 'react-icons/fa'

function navbar() {
  return (
   <Container fluid className='mt-2'>
     <Navbar>
             <Navbar.Brand href="#home">
        <img
              src={Logo}
              width="273px"
              height="50px"
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

export default navbar