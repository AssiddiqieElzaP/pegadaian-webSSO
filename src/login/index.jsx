import  React, {useState } from 'react'
import axios from 'axios'
import {Container, Form} from 'react-bootstrap'
import Logo from '../asset/images/logoNav.png'

// import {useNavigate} from 'react-router-dom'



const Login = () => {
    // const navigate = useNavigate();
    const [values, setValues] = useState({
        email:"",
        password:"",
        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
       
            try {
                axios
                .post("https://reqres.in/api/login", {
                    email: values.email,
                    password: values.password,
                })  
                .then((res) => {
                    console.log((res));
                    // localStorage.setItem("token", res.data.token);
                    // navigate("/dashboard")
                })
                
            } catch (error) {
                console.error((error))
            }
          
           
    };
    

  return (
    <>
      <div className='bg-login'>
            <Container className='mx-auto'>
                <div className='wrapper-login'>
                <br/><br/>
                <img src={Logo} alt="Login" className='mt-5' />
                <br/><br/><br/>
                <h1 className='mt-5'>Login</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="my-3" >
                        <Form.Control type="email" placeholder="NIK HCIS / Aralia" 
                       controlid='email'
                        name='email'
                         onChange={(e)=>setValues({...values,email:e.target.value})}
                         required   
                        />
                    </Form.Group>

                    <Form.Group className="my-3" >
                    <Form.Control type='password' placeholder="Password HCIS / Aralia"
                    controlid='password'
                    name='password'
                    onChange={(e)=>setValues({...values,password:e.target.value})}
                    required 
                    />
                    <Form.Text className="text-muted">
                        <p className='d-none'>*NIK / Password yang dimasukkan salah*</p>
                        </Form.Text>
                    </Form.Group>
                    <div className='mx-auto'>
                        <button className='me-5 mt-3'>Lupa Password ?</button>
                    <button variant="primary" type="submit"  className=' mt-3 mx-3 px-4 pt-1 saveButton btn-color'>
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

export default Login