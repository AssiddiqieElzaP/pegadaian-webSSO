import React from 'react'
import { Table } from 'react-bootstrap'

function TablefromAdd() {
  return (
    <>
    <div className='mx-auto px-3 mt-3'>
    <h6 className='mx-3 mb-3'>Hasil Pencarian</h6>
    <Table responsive="sm" border="secondary">
        <thead>
          <tr>
            <th>NIK</th>
            <th>USER ID BACKUP</th>
            <th>NAMA PEGAWAI</th>
            <th>JABATAN</th>
            <th>UNIT KERJA</th>
            <th>JENIS BACKUP</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
          <tr>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
            <td>Table cell</td>
          </tr>
        </tbody>
      </Table>
      <div>
        <button className='btn-color'>Tambah</button>
      </div>
    </div>
    </>
  )
}

export default TablefromAdd