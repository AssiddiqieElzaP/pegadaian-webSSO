import React from 'react'

import Navbar from '../../component/navbar/navbar';
import Sidebar from '../../component/sidebar/sidebar'
// import Dashboard from '../Pendaftaran/dashboard';
import RegisterBackup from '../Pendaftaran/daftarPengganti/registerBackup';
// import AddBackup from '../Pendaftaran/daftarPengguna/addBackup';
// import TablefromAdd from '../../component/table/tablefromAdd'
function AddRegist() {
  return (
    <>
    <Navbar/>
    <div className='d-flex'>
    <Sidebar/>
    {/* <Dashboard/> */}
    <RegisterBackup/>
    {/* <AddBackup/> */}
    {/* <TablefromAdd/> */}
    </div>
    </>
  )
}

export default AddRegist