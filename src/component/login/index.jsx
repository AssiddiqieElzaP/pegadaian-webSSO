import React from 'react'

import {Container, Form} from 'react-bootstrap'
import Logo from '../../asset/images/logoNav.png'

function loginPage() {
  return (
    <>
        <div className='bg-login'>
            <Container className='mx-auto mt-5 '>
                <div className='wrapper-login'>
                <img src={Logo} alt="Login" />
                <h1 className='mt-4'>Login</h1>
                <Form>
                    <Form.Group className="my-3" controlId="formBasicNik">
                        <Form.Control type="text" placeholder="NIK HCIS / Aralia" 
                        
                        />
                    </Form.Group>

                    <Form.Group className="my-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password HCIS / Aralia" 
                    />
                    <Form.Text className="text-muted">
                        <p className='d-none'>*NIK / Password yang dimasukkan salah*</p>
                        </Form.Text>
                    </Form.Group>
                    <div className='mx-auto'>
                        <button className='me-5 mt-3'>Lupa Password ?</button>
                    <button variant="primary" type="submit" className=' mt-3 mx-3 px-4 pt-1 saveButton btn-color'>
                    Login
                    </button>
                    </div>
                </Form>
                </div>
            </Container>
        </div>
    
    </>
  )
}

export default loginPage