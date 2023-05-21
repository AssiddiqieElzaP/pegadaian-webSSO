import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import axios from "axios";
// import PegawaiData from "./PegawaiData";
// import { Link } from "react-router-dom";

function TablefromAdd() {
  const [data,setData] = useState([]);
  useEffect(()=>{
    axios.get('http://10.87.10.123:8080/api/v1/backup/list')
    .then(res => setData(res.data.data))
    .catch(err => console.error(err));
  },[])

  return (
    <>
    <div className='mx-auto px-3 mt-3'>
    <h6 className='mx-3 mb-3'>Hasil Pencarian</h6>
    <Table responsive="sm" border="secondary" style={{fontSize:'14px'}}>
      <thead style={{fontSize:'14px'}}>
        <tr>
          <th>NIK</th>
          <th>USER ID BACKUP</th>
          <th>NAMA PEGAWAI</th>
          <th>JABATAN</th>
          <th>UNIT KERJA</th>
          <th>JENIS BACKUP</th>
          <th>STATUS</th>
        </tr>
      </thead>
      <tbody>
     {
      data && data.length > 0 ?
      data.map((user,i) =>{
        return (
        <tr key={i}>
            {/* <td>{user.nik}</td> */}
            <td>{user.uidBkp}</td>
            <td>{user.name}</td>
            <td>{user.status}</td>
            <td>{user.createdBy}</td>
            <td>{user.status}</td>
        </tr>
        )
      })
      : "data not available"}
      </tbody>
    </Table>
    <div>
      <button className='btn-color'>Tambah</button>
    </div>
    </div>
    </>
  );
}

export default TablefromAdd;
