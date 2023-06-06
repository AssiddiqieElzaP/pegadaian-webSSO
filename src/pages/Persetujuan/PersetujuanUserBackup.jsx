import React, {  useState } from 'react'
import SidebarMenu from '../../component/sidebar/sidebar'
import Header from '../../component/navbar/header'
import { Card, Container, Pagination, Table } from 'react-bootstrap'
// import axios from 'axios';
import DetailBackup from '../../component/modal/DetailBackup';

export default function PersetujuanUserBackup() {
  const [showConfirmation, setShowConfirmation] = useState(false);
  return (
   <>
   <div className="d-flex" style={{height:"125vh"}}>
    <SidebarMenu/>
    <Container  className="mx-auto p-0"> 
    <Header heading="PERSETUJUAN USER BACKUP"/>
        <Card className='mt-2 mx-3 p-4'>
        <Table bordered  className='m-auto text-center' >
      <thead style={{fontSize:"14px"}}>
        <tr>
          <th>NAMA PEGAWAI</th>
          <th>UNIT KERJA</th>
          <th>JABATAN</th>
          <th>JENIS BACKUP</th>
          <th>DURASI BACKUP</th>
          <th>KETERANGAN</th>
          <th>DETAIL</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody  style={{fontSize:"14px"}}>
       
        <tr>
          <td><button onClick={() => setShowConfirmation(true)}>Detail</button></td>
          <td className='d-flex'>
            <button className='mx-2 px-2'>Y</button>
            <button className='mx-2 px-2'>X</button>
          </td>
        </tr>
       
      </tbody>
    </Table>
    <DetailBackup
        show={showConfirmation}
        onClose={() => setShowConfirmation(false)}
      />
    <Pagination>
     
      <Pagination.Prev />
      <Pagination.Item>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
      <Pagination.Item>{5}</Pagination.Item>
      <Pagination.Next />
      
    </Pagination>
        </Card>
    </Container>
   </div>
   </>
  )
}
