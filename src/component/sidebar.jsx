import React from 'react'
import { Stack } from 'react-bootstrap'

function SideBar() {
  return (
   <>
   <div className='sidebar p-1'>
    <Stack gap={2} className="col-md-10  mt-4 mx-auto">
      <button className='btn-sidebar'>PENDAFTARAN</button>
      <button className='btn-sidebar'>CEK APPROVAL</button>
    </Stack>
   </div>
   </>
   )
}

export default SideBar