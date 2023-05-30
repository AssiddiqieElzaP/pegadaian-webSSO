import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

import axios from "axios";



function TablefromAdd() {
  const [dataBackup, setDataBackup] = useState({});
  

  useEffect(() => {
    const fetchData = async () => {
      try {
        await axios
          .get("http://localhost:8081/api/v1/dashboard/grid")
          .then((res) => {
            const data = res.data; //harus dibuatkan variabel sebelum di panggil di usestate
            setDataBackup(data);
            // console.log(test)
            console.log(dataBackup)
          });
      } catch (error) {}
    };
    fetchData();
  },[]);

  return (
    <>
      <div className="mx-auto px-3 mt-3">
        <h6 className="mx-3 mb-3">Hasil Pencarian</h6>
        <Table responsive="sm" border="secondary" style={{ fontSize: "14px" }}>
          <thead style={{ fontSize: "14px" }}>
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
            {dataBackup?.data.content?.map((g,key) => (
              
              <tr key={key}>
                      <td>{g.nik}</td>
                      <td>{g.uid_bkp}</td>
                      <td>{g.nama_pegawai}</td>
                      <td>{g.jabatan}</td>
                      <td>{g.unit_kerja}</td>
                      <td>{g.backupType}</td>
                    </tr>
               
           ))}
          </tbody>
        </Table>
      </div>
    </>
  );
}

export default TablefromAdd;
