import React from 'react'
import { Card, Form } from 'react-bootstrap'

function AddBackup() {
  return (
    <div className='mt-2'>
            <h6 className='mx-3 mb-2'>Detail Pegawai yang ditambahkan</h6>
            <div className='px-3'>
                <Card border="secondary" style={{ width: '100%', height: 'auto', }} className='mx-auto'>
                <Card.Body>
                    <Form action="">
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>NIK *</Form.Label>
                        <Form.Control type="text" placeholder="Masukkan Nik Lalu tekan Enter" />
                        <Form.Text className="text-muted">
                        *NIK tidak ditemukan / sudah terdaftar*
                         </Form.Text>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Nama</Form.Label>
                        <Form.Control type="text" placeholder="Nama Pegawai" disabled />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Jabatan address</Form.Label>
                        <Form.Control type="text" placeholder="Kode Jabatan - Nama Jabatan" disabled />
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Unit Kerja</Form.Label>
                        <Form.Control type="text" placeholder="Kode Unit - Nama Unit"  disabled/>
                     </Form.Group>
                     <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Unit Kerja</Form.Label>
                        <Form.Control type="text" placeholder="Generate NIK - BKP"  disabled/>
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
  )
}

export default AddBackup