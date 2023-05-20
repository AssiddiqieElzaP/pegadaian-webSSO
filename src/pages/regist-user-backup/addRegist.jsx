import React from 'react'

import Navbar from '../../component/navbar/navbar';
import Sidebar from '../../component/sidebar/sidebar'
// import Dashboard from '../Pendaftaran/dashboard';
// import RegisterBackup from '../Pendaftaran/daftarPengganti/registerBackup';
import AddBackup from '../Pendaftaran/daftarPengguna/addBackup';

function AddRegist() {
  return (
    <>
    <Container className='m-0 p-0'>
        <div className='wrapper-headnav'>
            <h4 className='title-head mx-2'>DATA PENDAFTARAN USER BACKUP</h4>
            {/* <DashboardForm/>
            <TablefromAdd/> */}
            {/* <AddBackup/> */}
            <RegisterBackup/>
        </div>
    </Container>
    </>
  )
}

export default AddRegist