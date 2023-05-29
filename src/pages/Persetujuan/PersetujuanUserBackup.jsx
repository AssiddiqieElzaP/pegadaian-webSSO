import React from 'react'
import SidebarMenu from '../../component/sidebar/sidebar'
import Header from '../../component/navbar/header'
import { Card, Container, Table } from 'react-bootstrap'

export default function PersetujuanUserBackup() {
  return (
   <>
   <div className="d-flex" style={{height:"125vh"}}>
    <SidebarMenu/>
    <Container  className="mx-auto p-0"> 
    <Header heading="PERSETUJUAN USER BACKUP"/>
        <Card className='mt-2 mx-3 p-4'>
        <Table bordered hover className='m-auto text-center' >
      <thead style={{fontSize:"14px"}}>
        <tr>
          <th>NAMA PEGAWAI</th>
          <th>USER ID BACKUP</th>
          <th>UNIT KERJA</th>
          <th>JABATAN</th>
          <th>JENIS BACKUP</th>
          <th>LAMA BACKUP</th>
          <th>KETERANGAN</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody  style={{fontSize:"14px"}}>
        <tr>
          <td>A</td>
          <td>00000000000BKP</td>
          <td>12300 - CP SALEMBA</td>
          <td>KASIR</td>
          <td>GANTI</td>
          <td>3 HARI</td>
          <td>DINAS KELUAR</td>
          <td className='d-flex'>
            <button className='mx-2 px-2'>Y</button>
            <button className='mx-2 px-2'>X</button>
          </td>
        </tr>
      </tbody>
    </Table>
        </Card>
    </Container>
   </div>
   </>
  )
}
