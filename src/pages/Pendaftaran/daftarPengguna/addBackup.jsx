import React from 'react'
import { Card, Container, Form } from 'react-bootstrap'
import Header from '../../../component/navbar/header'

function AddBackup() {
  return (
   <Container className='m-0 p-0'>
      <Header/>
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
                        />
                        <Form.Text className="text-muted">
                        <p className='d-none'>*NIK tidak ditemukan / sudah terdaftar*</p>
                         </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className='mb-0'>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama Pegawai" disabled 
                        style={{height:'30px', fontSize:'14px'}}/>
                     </Form.Group>
                     <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className='mb-0'>Jabatan</Form.Label>
                        <Form.Control type="text" placeholder="Kode Jabatan - Nama Jabatan" 
                        style={{height:'30px', fontSize:'14px'}}disabled />
                     </Form.Group>
                     <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className='mb-0'>Unit Kerja</Form.Label>
                        <Form.Control type="text" placeholder="Kode Unit - Nama Unit"style={{height:'30px', fontSize:'14px'}}  disabled/>
                     </Form.Group>
                     <Form.Group className="mb-2" controlId="formBasicEmail">
                        <Form.Label className='mb-0'>Unit Kerja</Form.Label>
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