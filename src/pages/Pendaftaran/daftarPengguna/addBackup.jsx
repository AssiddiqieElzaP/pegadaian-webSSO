import React, { useEffect, useState } from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import Header from '../../../component/navbar/header'

import axios from 'axios';

function AddBackup() {

   const [data,setData] = useState({
      nik:"",
      name:"",
   });
   
   
      const apiReq = ()=>{
         axios.post('http://172.168.102.91:8080/api/backup/nik',{

            nik : data.nik,
            name : data.name,
         })
         .then((res)=> {
            console.log(res.data)
            setData(res.data)
         })
         .catch((err)=>{
            console.error(err);
         })
      }
   const handleKey = (Event) =>{
      if(Event.key === 'Enter'){
         apiReq();
         
      }
   }
   // console.log(data)
  return (
   <Container className='m-0 p-0'>
      <Header heading="PENDAFTARAN USER BACKUP"/>
    <div className='mt-2'>
            <h6 className='mx-3 mb-2'>Detail Pegawai yang ditambahkan</h6>
            <div className='px-3'>
                <Card border="secondary" style={{ width: '100%', height: 'auto', }} className='mx-auto'>
                <Card.Body>
                    <Form action="">
                     <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className='mb-0'>NIK *</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nik Lalu tekan Enter"
                         style={{height:'30px', fontSize:'14px'}}
                           name='nik'
                           controlid='nik'
                           onChange={(e) => setData(e.target.value)}
                           onKeyDown={handleKey}
                        />
                        <Form.Text className="text-muted">
                        <p className='d-none'>*NIK tidak ditemukan / sudah terdaftar*</p>
                         </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-2" controlid="formBasicEmail">
                        <Form.Label className='mb-0'>Nama</Form.Label>
                        {/* {data.map((r) => {
                           <input type='text' value={r.name ? r.name : 'Nama Pegawai'}  style={{height:'30px', fontSize:'14px'}} />
                        })} */}
               
                     </Form.Group>
                     <Form.Group className="mb-2" controlid="formBasicEmail">
                        <Form.Label className='mb-0'>Jabatan</Form.Label>
                        <Form.Control type="text" placeholder="Kode Jabatan - Nama Jabatan" 
                        style={{height:'30px', fontSize:'14px'}}disabled 
                        name='username'
                        />
                     </Form.Group>
                     <Form.Group className="mb-2" controlid="formBasicEmail">
                        <Form.Label className='mb-0'>Unit Kerja</Form.Label>
                        <Form.Control type="text" placeholder="Kode Unit - Nama Unit"style={{height:'30px', fontSize:'14px'}}  disabled
                        name='email'
                        
                        />
                     </Form.Group>
                     <Form.Group className="mb-2" controlid="formBasicEmail">
                        <Form.Label className='mb-0'>User ID Backup</Form.Label>
                        <Form.Control type="text" placeholder="Generate NIK - BKP"style={{height:'30px', fontSize:'14px'}}  disabled/>
                     </Form.Group>
                    </Form>
                    <div className='d-flex'>
                    <button className='mt-3 btn-color mx-3'>Simpan</button>
                    <button className='mt-3 btn-color mx-3'>Batal</button>
                    </div>
                </Card.Body>
                </Card>
            </div>
    </div>
   </Container>
  )
}

export default AddBackup