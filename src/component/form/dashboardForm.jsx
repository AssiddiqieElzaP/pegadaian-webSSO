import React from 'react'
import { Card } from 'react-bootstrap'

function DashboardForm() {
  return (
    <div className='mt-3'>
            <h6 className='mx-3 mb-3'>Cari Data Pendaftaran User Backup</h6>
            <div className='px-3'>
                <Card border="secondary" style={{ width: '100%', height: '200px', }} className='mx-auto'>
                <Card.Body>
                 <Card.Title>NIK</Card.Title>
                     <form action="">
                         <input type="text" placeholder='Masukkan Nik Pegawai' />
                    </form>
                    <button className='mt-3 btn-color'>Cari</button>
                </Card.Body>
                </Card>
            </div>
    </div>
  )
}

export default DashboardForm