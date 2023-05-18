import React from 'react'
import { Card, Form } from 'react-bootstrap'
function RegisterBackup() {
  return (
    <div className='mt-2'>
    <div className='d-flex justify-content-evenly'>
    <h6 className='mx-5'>Detail Pegawai yang menggantikan</h6>
    <h6 className='mx-5'>Detail Pegawai yang digantikan</h6>
    </div>
    <div className='px-3 d-flex'>
        <Card border="secondary" style={{ width: '100%', height: 'auto', }} className='me-3'>
        <Card.Body>
            <Form action="">
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>NIK *</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nik Lalu tekan Enter" />
                <Form.Text className="text-muted" >
                <p style={{color:'red'}} className='mb-0'>*NIK tidak ditemukan</p>
                 </Form.Text>
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Pegawai" disabled />
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Jabatan address</Form.Label>
                <Form.Control type="text" placeholder="Kode Jabatan - Nama Jabatan" disabled />
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Unit Kerja</Form.Label>
                <Form.Control type="text" placeholder="Kode Unit - Nama Unit"  disabled/>
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Unit Kerja</Form.Label>
                <Form.Control type="text" placeholder="Generate NIK - BKP"  disabled/>
             </Form.Group>
            </Form>
        </Card.Body>
        </Card>
        <Card border="secondary" style={{ width: '100%', height: 'auto', }} className='ms-3'>
        <Card.Body>
            <Form action="">
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>NIK *</Form.Label>
                <Form.Control type="text" placeholder="Masukkan Nik Lalu tekan Enter" />
                <Form.Text className="text-muted">
                <p style={{color:'red'}} className='mb-0'>*NIK tidak ditemukan</p>
                 </Form.Text>
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Nama</Form.Label>
                <Form.Control type="text" placeholder="Nama Pegawai" disabled />
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Jabatan address</Form.Label>
                <Form.Control type="text" placeholder="Kode Jabatan - Nama Jabatan" disabled />
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Unit Kerja</Form.Label>
                <Form.Control type="text" placeholder="Kode Unit - Nama Unit"  disabled/>
             </Form.Group>
             <Form.Group className="mb-1" controlId="formBasicEmail">
                <Form.Label>Durasi Backup (hari)</Form.Label>
                <Form.Control type="date" placeholder="Lama backup dalam hitungan hari"  disabled/>
             </Form.Group>
             <Form.Group className="" controlId="formBasicEmail">
                <Form.Label>Tanggal Mulai - Akhir Backup</Form.Label>
                <Form.Control type="date" placeholder="DD/MM/YYYY - DD/MM/YYYY"  disabled/>
             </Form.Group>
            </Form>
        </Card.Body>
        </Card>
    </div>
    <div className='d-flex'>
            <button className='mt-3 btn-color mx-3'>Simpan</button>
            <button className='mt-3 btn-color mx-3'>Batal</button>
            </div>
</div>
  )
}

export default RegisterBackup