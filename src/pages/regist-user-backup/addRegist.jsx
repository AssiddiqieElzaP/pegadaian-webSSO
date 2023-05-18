import React from 'react'

import { Container} from 'react-bootstrap'
import DashboardForm from '../../component/form/dashboardForm'
import TablefromAdd from '../../component/table/tablefromAdd'
import AddBackup from '../../component/form/addBackup'
import RegisterBackup from '../../component/form/registerBackup'

function AddRegist() {
  return (
    <>
    <Container className='m-0 p-0'>
        <div className='wrapper-headnav'>
            <h4 className='title-head'>DATA PENDAFTARAN USER BACKUP</h4>
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