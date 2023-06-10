import  React, {useState } from 'react'
import axios from 'axios'
import {Container, Form} from 'react-bootstrap'
import Logo from '../asset/images/logoNav.png'

import {useNavigate} from 'react-router-dom'
import { toast } from 'react-toastify'



const Login = () => {
    const navigate = useNavigate();
    const [values, setValues] = useState({
        nik:"",
        password:"",
        
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if(validated()){
            // console.log('test')
            try {
                axios
                .post('http://localhost:8080/api/v1/welcome/login', {
                    nik: values.nik,
                    password: values.password,
                })  
                .then((res) => {
                    console.log((res.data));
                    // input data create by 
                    localStorage.setItem("token", res.data.data.Token);
                    localStorage.setItem("name", res.data.data.Name);
                    
                    navigate("/tabs")
                })
                
            } catch (error) {
                console.error((error))
            }
        }
          
           
    };
    
    const validated = () =>{
        let result =true;
        if(values.nik === '' || values.nik===null){
            result=false;
            toast.warning('Nik yang anda masukkan salah')
        }
        if(values === '' || values===null){
            result=false;
            toast.warning('Password yang anda masukkan salah')
        }
        return result;
    }
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
                        <Form.Control type="text" placeholder="NIK HCIS / Aralia" 
                
                        name='nik'
                         onChange={(e)=>setValues({...values,nik:e.target.value})}
                        //  required   
                         value={values.nik}
                        />
                    </Form.Group>

                    <Form.Group className="my-3" >
                    <Form.Control type='password' placeholder="Password HCIS / Aralia"
                    
                    name='password'
                    // value={password}
                    onChange={(e)=>setValues({...values,password:e.target.value})}
                    // required 
                    />
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